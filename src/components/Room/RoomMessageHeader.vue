<template>
  <div class="relative p-2 md:p-0 flex flex-col gap-2">
    <div class="md:hidden flex w-full justify-end p-2 z-10">
      <font-awesome-icon
        @click="onInfoButtonClicked"
        size="lg"
        :icon="['fas', 'info-circle']"
        class="text-chatbox-pink"
      />
    </div>
    <p class="md:hidden absolute mt-1 left-0 right-0 text-2xl">
      {{ joinedRoom.name }}
    </p>
    <p class="hidden md:block text-2xl">
      {{ joinedRoom.name }}
    </p>
    <div class="w-full bg-chatbox-bg-light h-1 rounded-full"></div>
  </div>
</template>



<script setup>
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { showModal } from "../../modules/modals";
import { useRooms } from "../../modules/room";

const { joinedRoom } = useRooms();

function onInfoButtonClicked() {
  showModal("people-list");
}
</script>