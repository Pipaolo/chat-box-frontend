<template>
  <div
    class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 w-full md:px-4 gap-2 md:gap-0"
  >
    <h4 class="place-self-center sm:col-span-2 md:col-span-3 break-all">
      {{ props.room.name }}
    </h4>
    <div
      class="grid col-span-1 grid-cols-2 grid-rows-2 sm:grid-rows-none gap-2 md:grid-cols-3 md:gap-4"
    >
      <button
        title="Join room"
        @click="onJoinRoomClicked"
        class="rounded bg-chatbox-bg-dark text-white border-2 border-solid border-chatbox-pink p-3 focus:outline-none hover:bg-chatbox-pink"
      >
        <font-awesome-icon
          size="lg"
          :icon="['fas', 'door-open']"
          class="text-white hidden sm:inline-block"
        />
        <font-awesome-icon
          size="sm"
          :icon="['fas', 'door-open']"
          class="text-white sm:hidden"
        />
      </button>
      <button
        title="Copy link to clipboard"
        @click="onCopyLinkClicked"
        class="rounded bg-chatbox-bg-dark text-white border-2 border-solid border-chatbox-pink p-3 focus:outline-none hover:bg-chatbox-pink"
      >
        <font-awesome-icon
          size="lg"
          :icon="['fas', 'clipboard']"
          class="text-white hidden sm:inline-block"
        />
        <font-awesome-icon
          size="sm"
          :icon="['fas', 'clipboard']"
          class="text-white sm:hidden"
        />
      </button>
      <button
        title="Delete room"
        @click="onDeleteRoomClicked"
        class="rounded bg-chatbox-bg-dark text-white border-2 border-solid border-chatbox-pink p-3 focus:outline-none hover:bg-chatbox-pink"
      >
        <font-awesome-icon
          size="lg"
          :icon="['fas', 'trash']"
          class="text-red-400 hidden sm:inline-block"
        />
        <font-awesome-icon
          size="sm"
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
import { useAuthentication } from "../../modules/authentication";
const props = defineProps({
  room: {
    type: Object,
  },
});

const { user } = useAuthentication();

function onCopyLinkClicked() {
  copyLink(props.room._id);
}
async function onJoinRoomClicked() {
  showModal("loading", {
    disableBackdropClick: true,
  });
  // await joinRoom(props.room, user);
  await router.push({ path: "/room/" + props.room._id, force: true });
}
function onDeleteRoomClicked() {
  showModal("loading");
  deleteRoom(props.room);
}
</script>