<template>
  <div
    class="hidden md:flex md:flex-col md:col-span-4 bg-chatbox-bg-dark rounded-lg h-full text-white p-4 gap-4 overflow-hidden"
  >
    <p class="text-3xl">People</p>

    <room-people-list></room-people-list>
    <div class="flex justify-evenly bg-chatbox-bg-light rounded-lg p-2">
      <button
        @click="onLeaveButtonClicked"
        class="text-red-400 focus:outline-none hover:bg-gray-500 rounded-lg p-2"
        type="button"
      >
        Leave
      </button>
      <div class="h-full rounded-full w-1 bg-chatbox-bg-dark"></div>
      <button
        @click="onCopyLinkButtonClicked"
        class="text-green-400 focus:outline-none hover:bg-gray-500 rounded-lg p-2"
      >
        Copy Link
      </button>
    </div>
  </div>
</template>

<script setup>
import RoomPeopleList from "./RoomPeopleList.vue";
import { leaveRoom, useRooms } from "../../modules/room.js";
import { useSocketClose, useSocketEmit } from "../../modules/websocket";
import { copyLink } from "../../helpers/copy_link";
import router from "../../routes";
import { useAuthentication } from "../../modules/authentication";
import { hideModal, showModal } from "../../modules/modals";

const { joinedRoom } = useRooms();
const { user } = useAuthentication();
function onCopyLinkButtonClicked() {
  copyLink(joinedRoom._id);
}

async function onLeaveButtonClicked() {
  showModal("loading", {
    disableBackdropClick: true,
  });
  useSocketEmit("leave room", {
    user,
    roomID: joinedRoom._id,
  });
  leaveRoom();
  useSocketClose();
  await router.push({ path: "/user", force: true });
  hideModal();
}
</script>
    