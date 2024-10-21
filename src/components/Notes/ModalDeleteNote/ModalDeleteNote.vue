<template>
  <div class="modal">
    <div class="modal-background" />
    <div class="modal-card" ref="modalCard">
      <header class="modal-card-header">
        <p class="modal-card-title">Delete Note?</p>
        <span class="close" aria-label="close" @click="closeModal">&times;</span>
      </header>
      <section class="modal-card-body">
        Are you sure you want to delete this note?
      </section>
      <footer class="modal-card-footer">
        <button class="button-secondary mr-1" @click="closeModal">Cancel</button>
        <button class="button is-danger" @click="storeNotes.deleteNote(id)">
          Delete
        </button>
      </footer>
    </div>
  </div>
</template>

<script setup>
import { onClickOutside } from "@vueuse/core";
import { onMounted, onUnmounted, ref } from "vue";
import { useStoreNotes } from "@/stores/storeNotes";

// store
const storeNotes = useStoreNotes();
const { deleteNote } = storeNotes;

// props
const props = defineProps({
  modelValue: {
    type: Boolean,
    default: false,
  },
  id: {
    type: String,
    required: true,
  },
});

// Emits
const emit = defineEmits(["update:modelValue"]);

// close modal
const closeModal = () => {
  emit("update:modelValue", false);
};

// Clickoutside
const modalCard = ref(null);
onClickOutside(modalCard, closeModal);

// keyboard controll
const handleKeyboard = (e) => {
  if (e.key === "Escape") closeModal();
};

onMounted(() => {
  document.addEventListener("keyup", handleKeyboard);
});

onUnmounted(() => {
  document.removeEventListener("keyup", handleKeyboard);
});
</script>

<style scoped>
@import "./ModalDeleteNote.css";
</style>
