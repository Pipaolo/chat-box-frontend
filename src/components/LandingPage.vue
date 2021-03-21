<template>
  <div
    class="z-10 landing-page flex flex-col justify-center items-center w-full bg-chatbox-bg-light h-full p-10 gap-10 md:gap-0 overflow-hidden"
  >
    <img
      class="w-36 md:absolute md:top-4 z-10"
      src="../assets/images/logo.png"
      alt="logo"
    />
    <div
      class="z-10 md:grid md:grid-cols-2 md:justify-center items-center w-4/5 gap-8"
    >
      <img
        class="browser-window animate__animated animate__slideInLeft mb-4 z-10"
        src="../assets/images/browser-window.png"
        alt="browser"
      />
      <div
        class="animate__animated animate__slideInRight z-10 flex flex-col justify-center items-center text-white"
      >
        <p class="z-10 content text-lg md:text-xl mb-8">
          A realtime chat room service that allows different users to
          communicate in a single room
        </p>
        <router-link v-slot="{ navigate }" to="/register" custom>
          <button
            type="button"
            class="z-10 border-chatbox-pink border-solid border-2 rounded-lg bg-chatbox-bg-dark p-2 outline-none w-full md:w-1/2"
            @click="navigate"
          >
            Register Now
          </button>
        </router-link>

        <router-link to="/login" class="z-10 text-sm underline">
          Existing User? Login Now!
        </router-link>
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
</script>

<style scoped>
.action button {
  outline: none;
}
.content {
  font-family: 'Sniglet', cursive;
}
</style>