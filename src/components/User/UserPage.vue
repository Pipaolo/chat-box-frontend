<template>
  <div
    class="flex flex-col items-center bg-chatbox-bg-light w-full h-screen p-8 gap-8"
  >
    <user-panel-header></user-panel-header>
    <user-panel></user-panel>
    <user-panel-footer></user-panel-footer>
  </div>
</template>


<script setup>
import UserPanelHeader from "./UserPanelHeader.vue";
import UserPanelFooter from "./UserPanelFooter.vue";
import UserPanel from "./UserPanel.vue";
</script>