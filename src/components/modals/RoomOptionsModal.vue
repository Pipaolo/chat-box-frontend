<template>
  <div
    class="flex items-center justify-center w-full h-full fixed top-0 left-0 z-50"
  >
    <div
      class="animate__animated animate__zoomIn bg-chatbox-bg-light rounded-lg w-full max-w-sm z-50 p-4"
    >
      <div class="flex flex-col items-center h-full">
        <h4 class="text-xl text-white mb-4">
          {{ modalProps.roomName }}
        </h4>
        <div class="flex flex-col items-center flex-1 gap-2">
          <button
            title="Join Room"
            class="w-full rounded bg-chatbox-bg-dark text-white border-2 border-solid border-chatbox-pink p-3 focus:outline-none hover:bg-chatbox-pink"
            @click="onJoinRoomClicked"
          >
            Join
          </button>
          <button
            title="Copy Room ID"
            class="w-full rounded bg-chatbox-bg-dark text-white border-2 border-solid border-chatbox-pink p-3 focus:outline-none hover:bg-chatbox-pink"
            @click="onCopyLinkClicked"
          >
            Copy Room ID
          </button>
          <button
            title="Delete Room"
            class="w-full rounded bg-chatbox-bg-dark text-red-400 border-2 border-solid border-chatbox-pink p-3 focus:outline-none hover:bg-chatbox-pink"
            @click="onDeleteRoomClicked"
          >
            Delete Room
          </button>
        </div>
      </div>
    </div>
    <div
      class="fixed bg-black opacity-50 w-full h-full z-40"
      @click="onOutsideClick"
    />
  </div>
</template>

<script setup="props">
import { defineProps, ref } from 'vue'
import { hideModal, showModal } from '../../modules/modals'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { deleteRoom } from '../../modules/room'
import { copyLink } from '../../helpers'
import router from '../../routes'
import {
  NOTIFICATION_TYPE,
  showNotification
} from '../../modules/notifications'

const { modalProps } = defineProps({
  modalProps: {
    type: Object,
    default: {
      disableBackdropClick: false,
      roomName: '',
      roomID: ''
    }
  }
})

function onOutsideClick() {
  hideModal()
}

function onCopyLinkClicked() {
  copyLink(modalProps.roomID)
  showNotification(NOTIFICATION_TYPE.success, 'Room ID Copied', {})
}
async function onJoinRoomClicked() {
  showModal('loading', {
    disableBackdropClick: true
  })
  await router.push({ path: '/room/' + modalProps.roomID, force: true })
}
function onDeleteRoomClicked() {
  showModal('loading'),
    {
      disableBackdropClick: true
    }
  deleteRoom(modalProps.roomID)
}
</script>
