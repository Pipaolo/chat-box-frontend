<template>
  <h4 class="text-white">
    {{ props.user.username }}
    <span v-if="isRoomOwner">🎇</span>
  </h4>
</template>
    


<script setup="props">
import { defineProps, onMounted, ref } from "vue";
import { useAuthentication } from "../../modules/authentication";
import { useRooms } from "../../modules/room";

const { joinedRoom } = useRooms();

const props = defineProps({
  user: {
    type: Object,
    required: true,
  },
});
let isRoomOwner = ref(false);

onMounted(() => {
  isRoomOwner.value = props.user._id === joinedRoom.createdBy;
});
</script>