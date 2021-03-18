<template>
  <div
    class="flex flex-col col-span-12 sm:col-span-8 bg-chatbox-bg-dark rounded-lg h-full text-white md:p-4 md:gap-4 overflow-hidden"
  >
    <div class="p-2 md:p-0 flex flex-col gap-2">
      <p class="text-2xl">{{ joinedRoom.name }}</p>
      <div class="w-full bg-chatbox-bg-light h-1 rounded-full"></div>
    </div>
    <room-message-list></room-message-list>
    <room-message-box></room-message-box>

    <div class="md:hidden flex justify-evenly rounded-lg pb-4">
      <button
        @click="onLeaveButtonClicked"
        class="text-red-400 focus:outline-none hover:bg-gray-500 rounded-lg"
        type="button"
      >
        Leave
      </button>
      <div class="h-full rounded-full w-1 bg-chatbox-bg-light"></div>
      <button
        @click="onCopyLinkButtonClicked"
        class="text-green-400 focus:outline-none hover:bg-gray-500 rounded-lg p-2"
      >
        Copy Link
      </button>
    </div>
  </div>
</template>

<script setup="props">
import RoomMessageList from "./RoomMessageList.vue";
import RoomMessageBox from "./RoomMessageBox.vue";
import { defineProps } from "vue";
import { useRooms } from "../../modules/room";

const { joinedRoom } = useRooms();
</script>