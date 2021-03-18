<template>
  <div class="grid grid-cols-4 w-full px-4">
    <h4 class="place-self-center col-span-3">{{ props.room.name }}</h4>
    <div class="grid grid-cols-3 gap-4">
      <button
        @click="onJoinRoomClicked"
        class="rounded bg-chatbox-bg-dark text-white border-2 border-solid border-chatbox-pink p-3 focus:outline-none hover:bg-chatbox-pink"
      >
        <font-awesome-icon
          size="lg"
          :icon="['fas', 'door-open']"
          class="text-white"
        />
      </button>
      <button
        @click="onCopyLinkClicked"
        class="rounded bg-chatbox-bg-dark text-white border-2 border-solid border-chatbox-pink p-3 focus:outline-none hover:bg-chatbox-pink"
      >
        <font-awesome-icon
          size="lg"
          :icon="['fas', 'clipboard']"
          class="text-white"
        />
      </button>
      <button
        @click="onDeleteRoomClicked"
        class="rounded bg-chatbox-bg-dark text-white border-2 border-solid border-chatbox-pink p-3 focus:outline-none hover:bg-chatbox-pink"
      >
        <font-awesome-icon
          size="lg"
          :icon="['fas', 'trash']"
          class="text-red-400"
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
import { showModal } from "../../modules/modals";
const props = defineProps({
  room: {
    type: Object,
  },
});

function onCopyLinkClicked() {
  copyLink(props.room._id);
}
function onJoinRoomClicked() {
  joinRoom(props.room);
  router.push({ path: "/room/" + props.room._id });
}
function onDeleteRoomClicked() {
  showModal("loading");
  deleteRoom(props.room);
}
</script>