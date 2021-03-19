<template>
  <img
    class="w-36"
    src="../assets/images/logo.png"
    alt="logo"
    @click="onLogoPressed"
  />
</template>

<script setup>
import router from "../routes";

async function onLogoPressed() {
  await router.push({ path: "/", force: true });
}
</script>