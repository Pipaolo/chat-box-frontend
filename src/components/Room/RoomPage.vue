<template>
  <div
    class="md:grid md:grid-cols-12 md:items-center bg-chatbox-bg-light w-full h-screen p-2 sm:p-8 gap-8 font-sniglet"
  >
    <room-people-panel></room-people-panel>
    <room-message-panel></room-message-panel>
  </div>
</template>


<script setup="props">
import RoomMessagePanel from "./RoomMessagePanel.vue";
import RoomPeoplePanel from "./RoomPeoplePanel.vue";
import { defineProps } from "vue";
import { useSocketOn } from "../../modules/websocket";
import { updateJoinedRoomUsers } from "../../modules/room";
import { hideModal } from "../../modules/modals";

const props = defineProps({
  id: {
    type: String,
  },
});

// Handle population of active users
useSocketOn("send data", (data) => {
  hideModal();
  updateJoinedRoomUsers(data);
});
</script>