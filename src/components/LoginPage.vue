<template>
  <div
    class="registration-page flex flex-col items-center md:justify-center w-full bg-chatbox-bg-dark h-full pt-10 md:p-10 gap-10 md:gap-0"
  >
    <img
      class="w-36 md:absolute md:top-4 z-10"
      src="../assets/images/logo.png"
      alt="logo"
    />
    <form
      @submit.prevent="onSubmit"
      class="animate__animated animate__bounceIn w-4/5 md:max-w-screen-sm bg-chatbox-bg-light rounded-xl p-8 text-white border-2 border-chatbox-pink border-solid z-10"
    >
      <div class="flex flex-col items-start mb-4">
        <label for="username">Username</label>
        <input
          v-model="username"
          class="focus:outline-none focus:ring-2 focus:ring-chatbox-pink shadow-sm rounded p-2 text-black w-full"
          type="text"
          id="username"
          name="username"
          placeholder="Username"
        />
      </div>
      <div class="flex flex-col items-start mb-4">
        <label for="password">Password</label>
        <input
          v-model="password"
          name="password"
          class="focus:outline-none focus:ring-2 focus:ring-chatbox-pink shadow-sm rounded p-2 text-black w-full"
          type="password"
          id="password"
          placeholder="Password"
        />
      </div>
      <button
        type="submit"
        class="rounded-full bg-chatbox-bg-dark w-full p-3 focus:outline-none hover:bg-chatbox-pink"
      >
        Login
      </button>
      <router-link to="/register" class="text-sm"
        >No Account? Create now!</router-link
      >
    </form>

    <img
      class="left-blob hidden md:block"
      src="../assets/images/blob-left-light.png"
      alt="blob"
    />
    <img
      class="right-blob hidden md:block"
      src="../assets/images/blob-right-light.png"
      alt="blob"
    />
    <img
      class="top-blob md:hidden"
      src="../assets/images/blob-top-light.png"
      alt="blob"
    />

    <img
      class="bottom-blob md:hidden"
      src="../assets/images/blob-bottom-light.png"
      alt="blob"
    />
  </div>
</template>


<script setup>
import { ref, watch } from "vue";
import { checkAuth, login, useAuthentication } from "../modules/authentication";
import { showModal } from "../modules/modals";
import router from "../routes";
const username = ref("");
const password = ref("");

async function onSubmit() {
  const regexp = /^[a-zA-Z0-9]*$/;

  if (username.value === "" || password.value === "") {
    showModal("error", {
      errorMessage: "Field cannot be empty",
      duration: 3000,
    });
    return;
  }

  if (!username.value.match(regexp)) {
    showModal("error", {
      errorMessage: "Username cannot contain spaces",
      duration: 3000,
    });
    return;
  } else if (!password.value.match(regexp)) {
    showModal("error", {
      errorMessage: "Password cannot contain spaces",
      duration: 3000,
    });
    return;
  }

  showModal("loading");
  await login(username.value, password.value);

  const { user } = useAuthentication();

  if (Object.keys(user).length !== 0) {
    await router.push({ path: "/user", force: true });
  }
}
</script>