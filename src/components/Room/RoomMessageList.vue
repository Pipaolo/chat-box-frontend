<template>
  <div
    ref="root"
    class="flex-1 flex flex-col-reverse overflow-x-hidden gap-4 p-2 scrollbar scrollbar-thin scrollbar- scrollbar-thumb-chatbox-pink scrollbar-track-transparent"
  >
    <room-message-item
      v-for="message in messages"
      :key="message.timestamp"
      :message="message"
    ></room-message-item>
  </div>
</template>

<script setup>
import RoomMessageItem from "./RoomMessageItem.vue";
import { ref, onMounted } from "vue";
import { useSocketOn } from "../../modules/websocket";

const root = ref(null);
const messages = ref([]);

onMounted(() => {
  useSocketOn("chat message", (message) => {
    messages.value = [message.data, ...messages.value];
    root.scrollTop = root.scrollHeight;
  });
});
</script>