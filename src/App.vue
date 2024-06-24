<template>
  <Navbar />
  <div class="container is-max-desktop px-2 py-4">
    <RouterView />
  </div>
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
