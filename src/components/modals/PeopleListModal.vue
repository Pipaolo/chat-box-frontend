<template>
  <div
    class="flex items-center justify-center w-full h-full fixed top-0 left-0 z-50 p-8"
  >
    <div
      class="animate__animated animate__zoomIn bg-chatbox-bg-light rounded-lg w-full h-1/2 z-50 p-4"
    >
      <div class="flex flex-col items-center h-full">
        <div class="w-full flex flex-col gap-2">
          <h4 class="text-xl text-white">People</h4>
          <div class="w-full bg-chatbox-bg-dark h-1 rounded-full"></div>
        </div>
        <div class="flex flex-col gap-4 flex-1 w-full overflow-x-auto p-4">
          <room-people-item
            v-for="user in joinedRoom.users"
            :key="user._id"
            :user="user"
          ></room-people-item>
        </div>
      </div>
    </div>
    <div
      class="fixed bg-black opacity-50 w-full h-full z-40"
      @click="onOutsideClick"
    ></div>
  </div>
</template>

<script setup="props">
import RoomPeopleItem from "../Room/RoomPeopleItem.vue";
import { hideModal } from "../../modules/modals";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { useRooms } from "../../modules/room";
import { useAuthentication } from "../../modules/authentication";
import { onMounted, ref } from "vue";

const { joinedRoom } = useRooms();

function onOutsideClick() {
  hideModal();
}
</script>
