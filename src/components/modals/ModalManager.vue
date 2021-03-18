



<template>
  <div>
    <loading-modal
      v-if="state.modal == 'loading'"
      class="animate__animated animate__fadeIn"
      :modalProps="state.modalProps"
    ></loading-modal>

    <error-modal
      v-if="state.modal == 'error'"
      :modalProps="state.modalProps"
    ></error-modal>
    <success-modal
      v-if="state.modal == 'success'"
      :modalProps="state.modalProps"
    ></success-modal>
    <create-room-modal v-if="state.modal == 'create-room'"></create-room-modal>
  </div>
</template>



<script setup>
import { watch, watchEffect } from "vue";
import { useModal, hideModal } from "../../modules/modals";
import LoadingModal from "./LoadingModal.vue";
import ErrorModal from "./ErrorModal.vue";
import SuccessModal from "./SuccessModal.vue";
import CreateRoomModal from "./CreateRoomModal.vue";

const modals = {
  loading: LoadingModal,
};

const state = useModal();

watch(state, (_, currentState) => {
  // Auto hide the modal when a duration is given
  if (currentState.modalProps.duration) {
    setTimeout(() => {
      hideModal();
    }, currentState.modalProps.duration);
  }
});
</script>