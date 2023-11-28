<template>
  <div class="notes">
    <AddEditNote
      v-model="newNote"
      ref="addEditNoteRef"
    >
      <template #buttons>
        <button
            class="button is-link has-background-success"
            :disabled="!newNote"
            @click="addNote"
          >
            Add New Note
          </button>
      </template>
    </AddEditNote>

    <Note
      v-for="note in storeNotes.notes"
      :key="note.id"
      :note="note"
      @deleteClicked="deleteNote"
    />

  </div>
</template>

<script setup>
/* ====== imports ====== */

import { ref } from 'vue'
import { useStoreNotes } from '@/stores/storeNotes'

import Note from '@/components/Notes/Note.vue'
import AddEditNote from '@/components/Notes/AddEditNote.vue'


/* ====== store ======*/
const storeNotes = useStoreNotes()

/* ====== notes ======*/
const newNote = ref('')
const addEditNoteRef = ref(null)

/* ====== methods ====== */
const addNote = () => {
  storeNotes.addNote(newNote.value)
  newNote.value = ''
  addEditNoteRef.value.focusTextArea()
}

const deleteNote = (idToDelete) => {
  storeNotes.deleteNote (idToDelete)
}

</script>