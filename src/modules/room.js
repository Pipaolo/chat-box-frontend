import { reactive } from "vue";
import axios from "../helpers/axios";
import router from "../routes";
import { hideModal, showModal } from "./modals";

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

export const joinRoom = async (room) => {
  state.joinedRoom = room;
};
export const deleteRoom = async (room) => {
  try {
    const response = await axios.delete(`/room/${room._id}`);
    state.rooms = state.rooms.filter((r) => r._id !== room._id);
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

export const fetchRoom = async (roomID) => {
  try {
    const response = await axios.get(`/room/${roomID}`);
    state.joinedRoom = response.data;
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

export const useRooms = () => state;
