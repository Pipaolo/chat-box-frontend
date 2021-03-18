<template>
  <div class="grid grid-cols-2 w-full px-4">
    <h4 class="place-self-center col-span-1">{{ props.room.name }}</h4>
    <div
      class="grid grid-cols-2 grid-rows-2 sm:grid-rows-none gap-2 sm:grid-cols-3 sm:gap-4"
    >
      <button
        @click="onJoinRoomClicked"
        class="rounded bg-chatbox-bg-dark text-white border-2 border-solid border-chatbox-pink p-3 focus:outline-none hover:bg-chatbox-pink"
      >
        <font-awesome-icon
          size="lg"
          :icon="['fas', 'door-open']"
          class="text-white hidden sm:inline-block"
        />
        <font-awesome-icon
          size="md"
          :icon="['fas', 'door-open']"
          class="text-white sm:hidden"
        />
      </button>
      <button
        @click="onCopyLinkClicked"
        class="rounded bg-chatbox-bg-dark text-white border-2 border-solid border-chatbox-pink p-3 focus:outline-none hover:bg-chatbox-pink"
      >
        <font-awesome-icon
          size="lg"
          :icon="['fas', 'clipboard']"
          class="text-white hidden sm:inline-block"
        />
        <font-awesome-icon
          size="md"
          :icon="['fas', 'clipboard']"
          class="text-white sm:hidden"
        />
      </button>
      <button
        @click="onDeleteRoomClicked"
        class="rounded bg-chatbox-bg-dark text-white border-2 border-solid border-chatbox-pink p-3 focus:outline-none hover:bg-chatbox-pink"
      >
        <font-awesome-icon
          size="lg"
          :icon="['fas', 'trash']"
          class="text-red-400 hidden sm:inline-block"
        />
        <font-awesome-icon
          size="md"
          :icon="['fas', 'trash']"
          class="text-red-400 sm:hidden"
        />
      </button>
    </div>
  </div>
</template>

<script setup="props">
import router from "../../routes";
import { defineProps } from "vue";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { deleteRoom, joinRoom } from "../../modules/room";
import { copyLink } from "../../helpers/copy_link";
import { hideModal, showModal } from "../../modules/modals";
const props = defineProps({
  room: {
    type: Object,
  },
});

function onCopyLinkClicked() {
  copyLink(props.room._id);
}
async function onJoinRoomClicked() {
  showModal("loading", {
    disableBackdropClick: true,
  });
  await joinRoom(props.room);
  await router.push({ path: "/room/" + props.room._id, force: true });
}
function onDeleteRoomClicked() {
  showModal("loading");
  deleteRoom(props.room);
}
</script>