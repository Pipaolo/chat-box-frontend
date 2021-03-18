<template>
  <div class="w-full h-full absolute top-0 left-0 z-40" @click="onOutsideClick">
    <div
      class="w-full h-full absolute top-0 left-0 bg-gray-600 opacity-50 z-40"
    ></div>

    <div class="grid place-content-center w-full h-full z-50">
      <font-awesome-icon
        size="4x"
        :icon="['fas', 'circle-notch']"
        class="text-chatbox-pink animate-spin"
      />
    </div>
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
  console.log(props.modalProps);
  if (!props.modalProps.disableBackdropClick) {
    hideModal();
  }
}
</script>
