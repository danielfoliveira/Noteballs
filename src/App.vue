<template>
  <Navbar />
  <section class="section">
    <RouterView />
  </section>
</template>

<script setup>
import { onMounted } from 'vue'
import { useStoreAuth } from '@/stores/storeAuth'

import Navbar from '@/components/Layout/Navbar.vue'

// store
const storeAuth = useStoreAuth()

// life cycle
onMounted(() => {
  storeAuth.init()
})
</script>

<style>
@import './assets/main.css';
</style>
