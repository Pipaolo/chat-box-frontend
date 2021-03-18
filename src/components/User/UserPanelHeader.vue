<template>
  <div
    class="grid sm:grid-cols-3 grid-rows-2 grid-cols-2 sm:grid-rows-none gap-4 max-w-3xl w-full place-content-center"
  >
    <input
      v-model="roomID"
      type="text"
      class="col-span-2 rounded-lg outline-none p-4"
      placeholder="Room ID"
    />
    <div class="sm:col-span-1 col-span-2 grid grid-cols-2 gap-4">
      <button
        @click="onJoinButtonClicked"
        type="submit"
        class="rounded bg-chatbox-bg-dark text-white border-2 border-solid border-chatbox-pink p-3 focus:outline-none hover:bg-chatbox-pink"
      >
        Join
      </button>
      <button
        @click="onCreateButtonClicked"
        class="rounded bg-chatbox-bg-dark text-white border-2 border-solid border-chatbox-pink p-3 focus:outline-none hover:bg-chatbox-pink"
        type="button"
      >
        Create
      </button>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { hideModal, showModal } from "../../modules/modals";
import { joinRoom } from "../../modules/room";
import router from "../../routes";

const roomID = ref("");

function onCreateButtonClicked() {
  showModal("create-room");
}

async function onJoinButtonClicked() {
  if (roomID.value.trim() !== "") {
    showModal("loading", {
      disableBackdropClick: true,
    });
    await router.push({ path: "/room/" + roomID.value });
  }
}
</script>