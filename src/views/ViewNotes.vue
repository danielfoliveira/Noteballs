<template>
  <div class="notes">
    <AddEditNote
      v-model="newNote"
      placeholder="Add a new note"
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

    <progress
      v-if="storeNotes.isLoading"
      class="progress is-small is-success"
      max="100"
    />

    <template v-else>
      <Note
        v-for="note in storeNotes.notes"
        :key="note.id"
        :note="note"
        @deleteClicked="deleteNote"
      />

      <div
        v-if="!storeNotes.notes.length"
        v-text="'No notes here yet... '"
        class="is-size-4 has-text-centered has-text-grey-light is-family-monospace py-6"
      />
    </template>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useStoreNotes } from "@/stores/storeNotes";
import { useWatchCharacters } from "@/use/useWatchCharacters";

import Note from "@/components/Notes/Note/Note.vue";
import AddEditNote from "@/components/Notes/AddEditNote/AddEditNote.vue";

// store
const storeNotes = useStoreNotes();
const { init } = storeNotes;

// notes
const newNote = ref("");
const addEditNoteRef = ref(null);

// methods
const addNote = () => {
  storeNotes.addNote(newNote.value);
  newNote.value = "";
  addEditNoteRef.value.focusTextArea();
};

const deleteNote = (idToDelete) => {
  storeNotes.deleteNote(idToDelete);
};

/** Watch characters */
useWatchCharacters(newNote, 50);
</script>

<style scoped>
@import "@/assets/viewNotes.css";
</style>
