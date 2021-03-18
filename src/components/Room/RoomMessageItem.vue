<template>
  <div class="grid grid-cols-2 p-2">
    <div
      v-if="props.message.username == auth.user.username"
      class="grid grid-cols-2 col-span-2"
    >
      <div class="cols-span-1"></div>
      <div class="animate__animated animate__slideInRight">
        <h1 class="text-right">
          {{ props.message.username }}
        </h1>
        <div
          class="break-all bg-chatbox-bg-light rounded-lg w-full border-chatbox-pink border-2 border-solid p-2"
        >
          {{ props.message.content }}
        </div>
        <h1 class="text-sm text-gray-500 text-right">{{ parsedDate }}</h1>
      </div>
    </div>
    <div v-else class="cols-span-1 animate__animated animate__slideInLeft">
      <h1 class="text-left">
        {{ props.message.username }}
      </h1>
      <div
        class="break-all bg-chatbox-bg-light rounded-lg w-full border-chatbox-pink border-2 border-solid p-2"
      >
        {{ props.message.content }}
      </div>
      <h1 class="text-sm text-gray-500 text-left">{{ parsedDate }}</h1>
    </div>
  </div>
</template>

<script setup>
import { defineProps, ref } from "vue";
import moment from "moment";
import { useAuthentication } from "../../modules/authentication";

const props = defineProps({
  message: {
    type: Object,
    required: true,
  },
});

const auth = useAuthentication();
const parsedDate = ref(moment(props.message.timestamp).fromNow());
// Update the date of messages in order to
// show correct timestamp
setInterval(() => {
  parsedDate.value = moment(props.message.timestamp).fromNow();
}, 1000);
</script>