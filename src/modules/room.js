import { reactive } from "vue";
import axios from "../helpers/axios";
import router from "../routes";
import { hideModal, showModal } from "./modals";
import { connect, useSocketEmit } from "./websocket";

const state = reactive({
  rooms: [],
  joinedRoom: {},
  isLoading: false,
});

export const fetchRooms = async () => {
  try {
    state.isLoading = true;
    const response = await axios.get("/room");
    state.rooms = response.data;
    state.isLoading = false;
  } catch (error) {
    state.isLoading = false;
    showModal("error", {
      errorMessage: error.response["data"]["message"],
      disableBackdropClick: true,
      duration: 3000,
    });
  }
};

export const deleteRoom = async (roomID) => {
  try {
    const response = await axios.delete(`/room/${roomID}`);
    state.rooms = state.rooms.filter((r) => r._id !== roomID);
    hideModal();
    return response.data;
  } catch (error) {
    showModal("error", {
      errorMessage: error.response["data"]["message"],
      disableBackdropClick: true,
      duration: 3000,
    });
    return null;
  }
};

export const leaveRoom = () => {
  state.joinedRoom = {};
};

export const createRoom = async (roomName) => {
  try {
    showModal("loading");
    const response = await axios.post(`/room`, {
      name: roomName,
    });
    state.rooms = [...state.rooms, response.data];
    hideModal();
    return response.data;
  } catch (error) {
    showModal("error", {
      errorMessage: error.response["data"]["message"],
      disableBackdropClick: true,
      duration: 3000,
    });
    return null;
  }
};

export const joinRoom = async (roomID, user) => {
  try {
    const response = await axios.get(`/room/${roomID}`);
    const joinedRoom = response.data;

    if (joinedRoom) {
      await connect(roomID);

      useSocketEmit("join room", {
        roomID,
        user,
      });

      state.joinedRoom = joinedRoom;
    }
    return joinedRoom;
  } catch (error) {
    showModal("error", {
      errorMessage: error.response["data"]["message"],
      disableBackdropClick: true,
      duration: 3000,
    });
    return null;
  }
};

export const updateJoinedRoomUsers = (users) => {
  if (state.joinedRoom) {
    state.joinedRoom.users = users;
  }
};

export const useRooms = () => state;
