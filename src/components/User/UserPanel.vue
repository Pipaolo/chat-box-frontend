<template>
  <div
    id="user-panel"
    class="flex flex-col flex-1 bg-chatbox-bg-dark rounded-lg h-full max-w-3xl w-full text-white p-4 gap-4 overflow-hidden"
  >
    <div class="grid grid-cols-3">
      <div></div>
      <h3 class="font-sniglet text-xl">Created Rooms</h3>
      <a
        class="cursor-pointer text-red-400 hover:text-chatbox-pink"
        @click="onLogoutClicked"
        >Sign out</a
      >
    </div>
    <user-panel-room-list></user-panel-room-list>
  </div>
</template>

<script setup>
import { logout } from "../../modules/authentication";
import router from "../../routes";
import UserPanelRoomList from "./UserPanelRoomList.vue";

async function onLogoutClicked() {
  await logout();
  await router.push({ path: "login" });
}
</script>

<style scoped>
#id {
  font-family: "Sniglet", cursive;
}
</style>