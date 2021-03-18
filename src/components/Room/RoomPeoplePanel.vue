<template>
  <div
    class="flex flex-col col-span-4 bg-chatbox-bg-dark rounded-lg h-full text-white p-4 gap-4 overflow-hidden"
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
import { useSocketClose } from "../../modules/websocket";
import { copyLink } from "../../helpers/copy_link";
import router from "../../routes";

const { joinedRoom } = useRooms();

function onCopyLinkButtonClicked() {
  copyLink(joinedRoom._id);
}

function onLeaveButtonClicked() {
  useSocketClose();
  leaveRoom();
  router.push({ path: "/user", force: true });
}
</script>
    