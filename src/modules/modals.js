import { reactive, toRefs } from "vue";

const state = reactive({
  modal: "",
  modalProps: {},
});

// Handles the communication between the modal manager and other components
export const showModal = (modalName, modalProps = {}) => {
  state.modal = modalName;
  state.modalProps = modalProps;
};

export const hideModal = () => {
  state.modal = "";
  state.modalProps = {};
};

export const useModal = () => state;
