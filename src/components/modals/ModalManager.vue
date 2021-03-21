

<template>
  <div>
    <loading-modal
      v-if="state.modal == 'loading'"
      class="animate__animated animate__fadeIn"
      modal-props="state.modalProps"
    />

    <error-modal
      v-if="state.modal == 'error'" 
      modal-props="state.modalProps"
    />
    <success-modal
      v-if="state.modal == 'success'"
      modal-props="state.modalProps"
    />

    <create-room-modal v-if="state.modal == 'create-room'" />
    <people-list-modal v-if="state.modal == 'people-list'" />
    <room-options-modal
      v-if="state.modal == 'room-options'"
      modal-props="state.modalProps"
    />
  </div>
</template>



<script setup>
import { watch } from 'vue'
import { useModal, hideModal } from '../../modules/modals'
import LoadingModal from './LoadingModal.vue'
import ErrorModal from './ErrorModal.vue'
import SuccessModal from './SuccessModal.vue'
import CreateRoomModal from './CreateRoomModal.vue'
import PeopleListModal from './PeopleListModal.vue'
import RoomOptionsModal from './RoomOptionsModal.vue'

const modals = {
  loading: LoadingModal
}

const state = useModal()

watch(state, (_, currentState) => {
  // Auto hide the modal when a duration is given
  if (currentState.modalProps.duration) {
    setTimeout(() => {
      hideModal()
    }, currentState.modalProps.duration)
  }
})
</script>