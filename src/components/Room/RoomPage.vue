<template>
  <div
    class="grid grid-cols-12 items-center bg-chatbox-bg-light w-full h-screen p-8 gap-8 font-sniglet"
  >
    <room-people-panel></room-people-panel>
    <room-message-panel></room-message-panel>
  </div>
</template>


<script setup="props">
import RoomMessagePanel from "./RoomMessagePanel.vue";
import RoomPeoplePanel from "./RoomPeoplePanel.vue";
import { defineProps } from "vue";

const props = defineProps({
  id: {
    type: String,
  },
});

// fetchRoom();
</script>