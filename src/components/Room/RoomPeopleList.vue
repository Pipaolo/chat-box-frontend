<template>
  <div class="flex flex-col gap-4 flex-1 overflow-x-auto">
    <room-people-item
      v-for="user in joinedRoom.users"
      :key="user._id"
      :user="user"
    ></room-people-item>
  </div>
</template>
    
<script setup="props">
import { ref } from "vue";
import { hideModal } from "../../modules/modals";
import { useRooms } from "../../modules/room";
import { useSocketOn } from "../../modules/websocket";

const { joinedRoom } = useRooms();

import RoomPeopleItem from "./RoomPeopleItem.vue";
</script>