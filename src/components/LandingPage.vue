<template>
  <div
    class="landing-page flex flex-col items-center md:justify-center w-full bg-chatbox-bg-light h-full p-10 gap-10 md:gap-0"
  >
    <img
      class="w-36 md:absolute md:top-4"
      src="../assets/images/logo.png"
      alt="logo"
    />
    <div
      class="md:grid md:grid-cols-2 md:justify-center items-center w-4/5 gap-8"
    >
      <img
        class="browser-window animate__animated animate__slideInLeft mb-4 z-10"
        src="../assets/images/browser-window.png"
        alt="browser"
      />
      <div class="flex flex-col justify-center items-center text-white">
        <p class="content text-lg md:text-xl mb-8">
          A realtime chat room service that allows different users to
          communicate in a single room
        </p>
        <router-link to="/register" custom v-slot="{ navigate }">
          <button
            @click="navigate"
            type="button"
            class="border-chatbox-pink border-solid border-2 rounded-lg bg-chatbox-bg-dark p-2 outline-none w-full md:w-1/2"
          >
            Register Now
          </button>
        </router-link>

        <router-link to="/login" class="text-sm"
          >Existing User? Login Now!</router-link
        >
      </div>
    </div>

    <img
      class="left-blob hidden md:block"
      src="../assets/images/blob-left-dark.png"
      alt="blob"
    />
    <img
      class="right-blob hidden md:block"
      src="../assets/images/blob-right-dark.png"
      alt="blob"
    />
    <img
      class="top-blob md:hidden"
      src="../assets/images/blob-top-dark.png"
      alt="blob"
    />

    <img
      class="bottom-blob md:hidden"
      src="../assets/images/blob-bottom-dark.png"
      alt="blob"
    />
  </div>
</template>

<script setup>
import { showModal } from "../modules/modals";

function onClick() {
  showModal("loading");
}
</script>

<style scoped>
.landing-page > * {
  z-index: 10;
}
.action button {
  outline: none;
}
.content {
  font-family: "Sniglet", cursive;
}
</style>