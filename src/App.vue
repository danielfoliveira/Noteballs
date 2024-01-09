<template>
  <Navbar />
  <div class="container is-max-desktop px-2 py-4">
    <RouterView />
  </div>
</template>

<script setup>
import { onMounted } from 'vue'
import { useStoreNotes } from '@/stores/storeNotes'

import Navbar from '@/components/Layout/Navbar.vue'

// store
const storeNotes = useStoreNotes()
const { getNotes } = storeNotes

// life cycle
onMounted(() => {
  getNotes()
})
</script>
<style>
@import 'bulma/css/bulma.min.css';
</style>