<template>
  <div class="modal is-active">
    <div class="modal-background"></div>
    <div
      class="modal-card"
      ref="modalCard"
    >
      <header class="modal-card-head">
        <p class="modal-card-title">Delete Note?</p>
        <button
          class="delete"
          aria-label="close"
          @click="closeModal"
        />
      </header>
      <section class="modal-card-body">
        Are you sure you want to delete this note?
      </section>
      <footer class="modal-card-foot is-justify-content-flex-end">
        <button
          class="button"
          @click="closeModal"
        >
          Cancel
        </button>
        <button class="button is-danger">Delete</button>
      </footer>
    </div>
  </div>
</template>

<script setup>
import { onClickOutside } from '@vueuse/core'
import { onMounted, onUnmounted, ref } from 'vue'

/* props */
const props = defineProps({
  modelValue: {
    type: Boolean,
    default: false
  }
})

/* Emits */
const emit = defineEmits(['update:modelValue'])

/* methods */
const closeModal = () => {
  emit('update:modelValue', false)
}

/** Clickoutside */
const modalCard = ref(null)
onClickOutside(modalCard, closeModal)

// keyboard controll
const handleKeyboard = e => {
  if (e.key === 'Escape') closeModal()
}
onMounted(() => {
  document.addEventListener('keyup', handleKeyboard)
})

onUnmounted(() => {
  document.removeEventListener('keyup', handleKeyboard)
})
</script>