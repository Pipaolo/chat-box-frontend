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
          <div v-html="parsedContent"></div>
        </div>
        <h1 class="text-sm text-gray-500 text-right">{{ date }}</h1>
      </div>
    </div>
    <div v-else class="cols-span-1 animate__animated animate__slideInLeft">
      <h1 class="text-left">
        {{ props.message.username }}
      </h1>
      <div
        class="break-all bg-chatbox-bg-light rounded-lg w-full border-chatbox-pink border-2 border-solid p-2"
      >
        <div v-html="parsedContent"></div>
      </div>
      <h1 class="text-sm text-gray-500 text-left">
        {{ date }}
      </h1>
    </div>
  </div>
</template>

<script setup>
import { defineProps, ref } from "vue";
import moment from "moment";
import { parseTextToEmoji, parseTextToLink } from "../../helpers";
import { useAuthentication } from "../../modules/authentication";

const props = defineProps({
  message: {
    type: Object,
    required: true,
  },
});

const auth = useAuthentication();

const messageLinks = parseTextToLink(props.message.content);

const date = ref(moment(props.message.timestamp).fromNow());

// Remove links
const parsedContent = ref(parseTextToEmoji(props.message.content));

if (messageLinks) {
  // Change each link found
  for (let i = 0; i < messageLinks.length; i++) {
    const link = messageLinks[i];
    const linkElement = `<a style="color: var(--color-accent); text-decoration: underline;" href=${link} target="_blank">${link}</a>`;
    parsedContent.value = parseTextToEmoji(
      props.message.content.replace(link, linkElement)
    );
  }
}
// Update the date of messages in order to
// show correct timestamp
setInterval(() => {
  date.value = moment(props.message.timestamp).fromNow();
}, 1000);
</script>

<style scoped>
</style>