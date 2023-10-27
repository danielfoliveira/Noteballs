<template>
  <div
    class="card mb-4"
  >
    <div class="card-content">
      <div class="content">
        {{ note.content }}
        <div class="has-text-right has-text-grey-light mt-2">
          <small>{{ characterLength }} </small>
        </div>
      </div>
    </div>
    <footer class="card-footer">
      <a href="#" class="card-footer-item">Edit</a>
      <a
        class="card-footer-item"
        href="#"
        @click.prevent="deleteNote(note.id)"
      >
        Delete
      </a>
    </footer>
  </div>
</template>

<script setup>
/* ====== imports ====== */
import { computed } from 'vue'
import { useStoreNotes } from '@/stores/storeNotes'

/* ====== props ====== */
const props = defineProps({
  note: {
    type: Object,
    required: true
  }
})

/* ====== store ====== */
const storeNotes = useStoreNotes()
const { deleteNote } = storeNotes 

/* ====== character length ====== */
const characterLength = computed(() => {
  let length = props.note.content.length
  let description = length > 1 ? 'characters' : 'character'
  return `${length} ${description}`
})

</script>