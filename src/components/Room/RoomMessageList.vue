<template>
  <div class="flex-1 flex flex-col overflow-x-auto gap-4">
    <room-message-item
      v-for="message in messages"
      :key="message.timestamp"
      :message="message"
    ></room-message-item>
  </div>
</template>

<script setup>
import RoomMessageItem from "./RoomMessageItem.vue";
import { ref } from "vue";
import { useSocketOn } from "../../modules/websocket";

const messages = ref([]);

useSocketOn("chat message", (message) => {
  messages.value.push(message.data);
});
</script>