<template>
  <div
    class="flex items-center justify-center w-full h-full fixed top-0 left-0 z-50"
  >
    <div class="bg-chatbox-bg-light rounded-lg w-1/2 h-1/2 z-50 p-4">
      <div class="flex flex-col items-center h-full">
        <font-awesome-icon
          size="6x"
          :icon="['fas', 'exclamation-circle']"
          class="text-red-400"
        />
        <div class="flex items-center flex-1 text-center text-md text-white">
          <p class="text-lg text-white">
            Error: {{ props.modalProps.errorMessage }}
          </p>
        </div>
      </div>
    </div>
    <div
      class="fixed bg-black opacity-50 w-full h-full z-40"
      @click="onOutsideClick"
    ></div>
  </div>
</template>

<script setup="props">
import { defineProps } from "vue";
import { hideModal } from "../../modules/modals";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

const props = defineProps({
  modalProps: {
    type: Object,
    default: {
      disableBackdropClick: false,
    },
  },
});

function onOutsideClick() {
  if (!props.modalProps.disableBackdropClick) {
    hideModal();
  }
}
</script>
