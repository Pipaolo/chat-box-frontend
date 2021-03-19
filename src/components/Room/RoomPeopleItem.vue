<template>
  <h4 class="font-sniglet">
    <span
      v-if="props.user.username == user.username"
      class="text-chatbox-pink underline"
      >{{ props.user.username }}</span
    >
    <span v-else>{{ props.user.username }}</span>

    <span v-if="isRoomOwner">🎇</span>
  </h4>
</template>
    
<script setup="props">
import { defineProps, onMounted, ref } from "vue";
import { useAuthentication } from "../../modules/authentication";
import { useRooms } from "../../modules/room";

const { joinedRoom } = useRooms();
const { user } = useAuthentication();
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