<template>
  <div class="flex-1 flex-grow flex flex-col overflow-x-auto gap-4">
    <div v-if="state.isLoading">Loading Rooms...</div>
    <user-panel-room-item
      v-else
      v-for="room of state.rooms"
      :key="room._id"
      :room="room"
    ></user-panel-room-item>
  </div>
</template>

<script setup>
import UserPanelRoomItem from "./UserPanelRoomItem.vue";

import { ref } from "vue";
import { useRooms, fetchRooms } from "../../modules/room";

const state = useRooms();
fetchRooms();
const temps = ref([...Array(20)]);
</script>