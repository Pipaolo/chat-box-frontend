<template>
  <router-view />

  <ModalManager></ModalManager>
</template>

<script setup>
import LandingPage from "./components/LandingPage.vue";
import LoadingModal from "./components/modals/LoadingModal.vue";
import ModalManager from "./components/modals/ModalManager.vue";
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height: 100vh;
  width: 100%;
  padding: 0;
}
.left-blob {
  z-index: 0 !important;
  height: 100%;
  position: absolute;
  top: 0px;
  left: 0px;
}

.right-blob {
  z-index: 0 !important;
  height: 100%;
  position: absolute;
  top: 0px;
  right: 0px;
}

.top-blob {
  position: absolute;
  z-index: 0 !important;
  top: 0px;
  left: 0px;
  right: 0px;
}

.bottom-blob {
  z-index: 0 !important;
  position: absolute;
  bottom: 0px;
  left: 0px;
  right: 0px;
}
</style>