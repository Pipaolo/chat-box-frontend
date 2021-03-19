import { reactive, computed } from "vue";
import axios from "../helpers/axios";
import { hideModal, showModal } from "./modals";

const state = reactive({
  user: {},
});

export const login = async (username, password) => {
  try {
    const response = await axios.patch("/auth/login", {
      username,
      password,
    });

    localStorage.setItem("token", response.data.token);
    const userData = response.data;
    delete userData["token"];
    state.user = userData;
    // Store the token in the local storage
    hideModal();
  } catch (error) {
    hideModal();
    showModal("error", {
      errorMessage: error.response["data"]["message"],
      disableBackdropClick: true,
      duration: 3000,
    });
  }
};

export const register = async (username, password) => {
  try {
    const response = await axios.post("/auth/register", {
      username,
      password,
    });
    hideModal();
    showModal("success", {
      successMessage: "Registration Success! You may now login! ;)",
      disableBackdropClick: true,
      duration: 3000,
    });
    return response.data;
  } catch (error) {
    hideModal();
    showModal("error", {
      errorMessage: error.response.data.message,
      disableBackdropClick: true,
      duration: 3000,
    });
    return null;
  }
};

export const logout = async () => {
  // Remove the token from the storage
  window.localStorage.removeItem("token");
  state.user = {};
};

export const checkAuth = async () => {
  // get token
  const token = window.localStorage.getItem("token");
  if (!token) {
    return null;
  } else {
    try {
      const response = await axios.get("/user");
      state.user = response.data;
      return state.user;
    } catch (err) {
      return null;
    }
  }
};

export const useAuthentication = () => state;
