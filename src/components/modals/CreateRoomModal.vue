<template>
  <div
    class="flex items-center justify-center w-full h-full fixed top-0 left-0 z-50"
  >
    <div
      class="animate__animated animate__zoomIn bg-chatbox-bg-light rounded-lg w-full max-w-sm z-50 p-4"
    >
      <div class="flex flex-col items-center h-full">
        <h4 class="text-xl text-white mb-4">Create Room</h4>
        <div class="flex items-center flex-1">
          <div class="flex flex-col sm:flex-row gap-4">
            <input
              v-model="roomName"
              class="rounded-lg outline-none p-2 text-black"
              type="text"
              placeholder="Room Name"
            />
            <button
              @click="onCreateRoomClicked"
              class="text-white rounded-lg bg-chatbox-bg-dark w-full p-3 focus:outline-none hover:bg-chatbox-pink"
              type="button"
            >
              Create Room
            </button>
          </div>
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
import { defineProps, ref } from "vue";
import { hideModal, showModal } from "../../modules/modals";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { createRoom } from "../../modules/room";

const roomName = ref("");

function onOutsideClick() {
  hideModal();
}

async function onCreateRoomClicked() {
  hideModal();
  showModal("loading", {
    disableBackdropClick: true,
  });
  await createRoom(roomName.value);
  hideModal();
}
</script>
