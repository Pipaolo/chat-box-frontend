<template>
  <div class="flex flex-col gap-4 flex-1 overflow-x-auto">
    <room-people-item
      v-for="person in people"
      :key="person._id"
      :username="person.username"
    ></room-people-item>
  </div>
</template>
    
<script setup="props">
import { ref } from "vue";
import { hideModal } from "../../modules/modals";
import { useSocketOn } from "../../modules/websocket";
const people = ref([]);

useSocketOn("send data", (data) => {
  hideModal();
  people.value = data;
});

import RoomPeopleItem from "./RoomPeopleItem.vue";
</script>