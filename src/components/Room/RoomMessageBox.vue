<template>
  <div class="flex w-full">
    <input
      v-model="message"
      @keyup.enter="sendMessage"
      type="text"
      class="w-full p-2 rounded-tl-lg rounded-bl-lg focus:outline-none bg-chatbox-bg-light"
      placeholder="Enter Message"
    />
    <div class="rounded-tr-lg rounded-br-lg bg-chatbox-bg-light">
      <button
        @click="sendMessage"
        class="p-3 text-white rounded-full focus:outline-none hover:bg-gray-600"
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

<script setup>
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { ref } from 'vue'
import { useAuthentication } from '../../modules/authentication.js'
import { useRooms } from '../../modules/room.js'
import { useSocketEmit } from '../../modules/websocket.js'

const message = ref('')
function sendMessage() {
  if (message.value !== '') {
    const { joinedRoom } = useRooms()
    const { user } = useAuthentication()
    useSocketEmit('chat message', {
      roomID: joinedRoom._id,
      message: {
        username: user.username,
        content: message.value
      }
    })
    // Reset the message once sent
    message.value = ''
  }
}
</script>
