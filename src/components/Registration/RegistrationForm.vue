<template>
  <form
    @submit.prevent="onSubmit"
    class="animate__animated animate__bounceIn w-4/5 md:max-w-screen-sm bg-chatbox-bg-light rounded-xl p-8 text-white border-2 border-chatbox-pink border-solid z-10"
  >
    <div class="flex flex-col items-start mb-4">
      <label for="username">Username</label>
      <input
        v-model="state.username"
        class="focus:outline-none focus:ring-2 focus:ring-chatbox-pink shadow-sm rounded p-2 text-black w-full"
        type="text"
        id="username"
        placeholder="Enter Username"
      />
      <div
        v-if="v$.username.$error"
        class="text-red-400 text-sm animate__animated animate__fadeInDown mt-1"
      >
        {{ v$.username.$errors[0].$message }}
      </div>
    </div>
    <div class="flex flex-col items-start mb-4">
      <label for="password">Password</label>
      <input
        v-model="state.password"
        class="focus:outline-none focus:ring-2 focus:ring-chatbox-pink shadow-sm rounded p-2 text-black w-full"
        type="password"
        id="password"
        placeholder="Password"
      />
      <div
        v-if="v$.password.$error"
        class="text-red-400 text-sm animate__animated animate__fadeInDown mt-1"
      >
        {{ v$.password.$errors[0].$message }}
      </div>
    </div>
    <div class="flex flex-col items-start mb-4">
      <label for="confirmPassword">Confirm Password</label>
      <input
        v-model="state.confirmPassword"
        class="focus:outline-none focus:ring-2 focus:ring-chatbox-pink shadow-sm rounded p-2 text-black w-full"
        type="password"
        id="confirmPassword"
        placeholder="Confirm Password"
      />
      <div
        v-if="v$.confirmPassword.$error"
        class="text-red-400 text-sm animate__animated animate__fadeInDown mt-1"
      >
        {{ v$.confirmPassword.$errors[0].$message }}
      </div>
    </div>
    <button
      type="submit"
      class="rounded-full bg-chatbox-bg-dark w-full p-3 focus:outline-none hover:bg-chatbox-pink"
    >
      Register
    </button>
    <router-link to="/login" class="text-sm underline"
      >Existing User? Login Now!</router-link
    >
  </form>
</template>

<script setup>
import { reactive } from 'vue'
import { showModal } from '../../modules/modals'
import { useVuelidate } from '@vuelidate/core'
import { required, alphaNum, helpers, alpha } from '@vuelidate/validators'
import router from '../../routes'
import { register, useAuthentication } from '../../modules/authentication'

const state = reactive({
  username: '',
  password: '',
  confirmPassword: ''
})

const samePassword = (value) => value === state.password

const rules = {
  username: {
    required,
    alphaNum: helpers.withMessage(
      'Username cannot contain spaces and symbols',
      alphaNum
    )
  },
  password: {
    required,
    alphaNum: helpers.withMessage(
      'Password cannot contain spaces and symbols',
      alphaNum
    )
  },
  confirmPassword: {
    required,
    alphaNum: helpers.withMessage(
      'Password cannot contain spaces and symbols',
      alphaNum
    ),
    samePassword: helpers.withMessage('Password is not the same', samePassword)
  }
}

const { value: v$ } = useVuelidate(rules, state)

async function onSubmit() {
  v$.$touch()
  const isFormCorrect = await v$.$validate()
  if (!isFormCorrect) return

  showModal('loading')
  await register(state.username, state.password)

  const { user } = useAuthentication()

  if (Object.keys(user).length !== 0) {
    await router.push({ path: '/user', force: true })
  }
}
</script>