<template>
  <div class="flex w-full p-4 md:p-0">
    <input
      v-model="message"
      @keyup.enter="sendMessage"
      type="text"
      class="w-full p-2 focus:outline-none bg-chatbox-bg-light rounded-tl-lg rounded-bl-lg"
      placeholder="Enter Message"
    />
    <div class="bg-chatbox-bg-light rounded-tr-lg rounded-br-lg">
      <button
        @click="sendMessage"
        class="rounded-full text-white p-3 focus:outline-none hover:bg-gray-600"
      >
        <font-awesome-icon
          size="lg"
          :icon="['fas', 'paper-plane']"
          class="text-chatbox-pink"
        />
      </button>
    </div>
  </div>
</template>

<script setup >
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { ref, useContext } from "vue";
import { useAuthentication } from "../../modules/authentication.js";
import { useRooms } from "../../modules/room.js";
import { useSocketEmit } from "../../modules/websocket.js";

const message = ref("");
const context = useContext();
function sendMessage() {
  if (message.value !== "") {
    const { joinedRoom } = useRooms();
    const { user } = useAuthentication();
    useSocketEmit("chat message", {
      roomID: joinedRoom._id,
      message: {
        username: user.username,
        content: message.value,
      },
    });
    // Reset the message once sent
    message.value = "";
  }
}
</script>