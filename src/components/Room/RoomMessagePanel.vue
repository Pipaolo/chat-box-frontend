<template>
  <div
    class="flex flex-col col-span-12 sm:col-span-8 bg-chatbox-bg-dark rounded-lg h-full text-white p-2 md:p-4 gap-4 overflow-hidden"
  >
    <room-message-header />
    <room-message-list />
    <room-message-box />

    <div class="md:hidden flex justify-evenly rounded-lg pb-4">
      <button
        class="text-red-400 focus:outline-none hover:bg-gray-500 rounded-lg"
        type="button"
        @click="onLeaveButtonClicked"
      >
        Leave
      </button>
      <div class="h-full rounded-full w-1 bg-chatbox-bg-light" />
      <button
        class="text-green-400 focus:outline-none hover:bg-gray-500 rounded-lg p-2"
        @click="onCopyLinkButtonClicked"
      >
        Copy Link
      </button>
    </div>
  </div>
</template>

<script setup="props">
import RoomMessageList from './RoomMessageList.vue'
import RoomMessageBox from './RoomMessageBox.vue'
import RoomMessageHeader from './RoomMessageHeader.vue'

import { defineProps } from 'vue'
import { leaveRoom, useRooms } from '../../modules/room'
import { hideModal, showModal } from '../../modules/modals'
import { useSocketClose, useSocketEmit } from '../../modules/websocket'
import router from '../../routes'
import { useAuthentication } from '../../modules/authentication'
import { copyLink } from '../../helpers/copy_link'
import {
  NOTIFICATION_TYPE,
  showNotification
} from '../../modules/notifications'

const { joinedRoom } = useRooms()
const { user } = useAuthentication()

function onCopyLinkButtonClicked() {
  copyLink(window.location.href)
  showNotification(NOTIFICATION_TYPE.success, 'Room Link Copied!')
}

async function onLeaveButtonClicked() {
  showModal('loading', {
    disableBackdropClick: true
  })
  useSocketEmit('leave room', {
    user,
    roomID: joinedRoom._id
  })
  leaveRoom()
  useSocketClose()
  await router.push({ path: '/user', force: true })
  hideModal()
}
</script>
