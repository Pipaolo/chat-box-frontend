<template>
  <div
    class="flex flex-col col-span-8 bg-chatbox-bg-dark rounded-lg h-full text-white p-4 gap-4 overflow-hidden"
  >
    <div class="flex flex-col gap-2">
      <p class="text-2xl">{{ joinedRoom.name }}</p>
      <div class="w-full bg-chatbox-bg-light h-1 rounded-full"></div>
    </div>
    <room-message-list></room-message-list>
    <room-message-box></room-message-box>
  </div>
</template>

<script setup="props">
import RoomMessageList from "./RoomMessageList.vue";
import RoomMessageBox from "./RoomMessageBox.vue";
import { defineProps } from "vue";
import { useRooms } from "../../modules/room";

const { joinedRoom } = useRooms();
</script>