<template>
  <div class="auth">
    <div class="tabs is-centered">
      <ul>
        <li 
          :class="{ 'is-active': !register }"
        >
            <a @click.prevent="register = false">Login</a>
        </li>
        <li 
          :class="{ 'is-active': register }"
        >
          <a @click.prevent="register = true">Sign Up</a>
        </li>
      </ul>
    </div>
    <div class="card auth-form">
      <div class="card-content">
        <div class="title has-text-centered">
          {{ formTitle }}
        </div>

        <form @submit.prevent="onSubmit">
          <div class="field">
            <div class="control">
              <input
                v-model="credentials.email"
                class="input"
                placeholder="Email"
                type="email"
              >
            </div>
          </div>
          <div class="field">
            <div class="control">
              <input
                v-model="credentials.password"
                class="input"
                placeholder="Password"
                type="password"
              >
            </div>
          </div>
          <div class="field is-grouped is-grouped-right">
            <p class="control">
              <button class="button is-success">
                {{ formTitle }}
              </button>
            </p>
          </div>
        </form>
      </div>
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

<style>
.auth-form {
  max-width: 400px;
  margin: 0 auto;
}

</style>