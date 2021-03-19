<template>
  <div
    class="registration-page flex flex-col items-center md:justify-center w-full bg-chatbox-bg-dark h-full pt-10 md:p-10 gap-10 md:gap-0"
  >
    <logo class="w-36 md:absolute md:top-4 z-10"></logo>
    <registration-form></registration-form>
    <img
      class="left-blob hidden md:block"
      src="../../assets/images/blob-left-light.png"
      alt="blob"
    />
    <img
      class="right-blob hidden md:block"
      src="../../assets/images/blob-right-light.png"
      alt="blob"
    />
    <img
      class="top-blob md:hidden"
      src="../../assets/images/blob-top-light.png"
      alt="blob"
    />

    <img
      class="bottom-blob md:hidden"
      src="../../assets/images/blob-bottom-light.png"
      alt="blob"
    />
  </div>
</template>
<script setup>
import Logo from "../Logo.vue";
import RegistrationForm from "./RegistrationForm.vue";
</script>