<template>
  <div class="tabs">
    <ul>
      <li :class="{ 'tab-item--active': !register }">
          <a @click.prevent="register = false">Login</a>
      </li>
      <li :class="{ 'tab-item--active': register }">
        <a @click.prevent="register = true">Sign Up</a>
      </li>
    </ul>
  </div>
  <div class="card auth-form">
    <div class="card-content">
      <div class="title">
        {{ formTitle }}
      </div>

      <form @submit.prevent="onSubmit">
        <div class="field">
          <input
            v-model="credentials.email"
            class="input"
            placeholder="Email"
            type="email"
          >
        </div>
        <div class="field">
          <input
            v-model="credentials.password"
            class="input"
            placeholder="Password"
            type="password"
          >
        </div>
        <div class="submit-container">
          <button class="button">
            {{ formTitle }}
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, reactive  } from 'vue'
import { useStoreAuth } from '@/stores/storeAuth'


//store
const storeAuth = useStoreAuth()

const register = ref(false)
const credentials = reactive({
  email: '',
  password: ''
})

const formTitle = computed(() => {
  return register.value ? 'Register' : 'Login'
})


const onSubmit = () => {
  if (!credentials.email || !credentials.password) {
    alert('Please enter your credentials')
  } else {
    if (register.value) {
      storeAuth.registerUser(credentials)
    } else {
      storeAuth.login(credentials)
    }
  }
}
</script>

<style scoped>
@import '@/assets/viewAuth.css';
</style>