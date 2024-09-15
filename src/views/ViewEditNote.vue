<template>
  <div class="edit-note">
    <AddEditNote
      v-model="noteContent"
      bgColor="link"
      placeholder="Edit note"
      label="Edit Note"
      ref="addEditNoteRef"
    >
      <template #buttons>
        <button
          class="button-secondary"
          @click="$router.back()"
        >
          Cancel
        </button>
        <button
          class="button bg-color-link ml-1"
          :disabled="!noteContent"
          @click="handleSavedClicked"
        >
          Save Note
        </button>
      </template>
    </AddEditNote>
  </div>
</template>

<script setup>
/** Imports */
import { ref } from "vue";
import { useRoute, useRouter } from "vue-router";
import { useStoreNotes } from "@/stores/storeNotes";

import AddEditNote from "@/components/Notes/AddEditNote/AddEditNote.vue";

/** Router */
const route = useRoute();
const router = useRouter();

/** Store */
const storeNotes = useStoreNotes();

/** Notes */
const noteContent = ref("");
noteContent.value = storeNotes.getNoteContent(route.params.id)?.content;

/** methods */
const handleSavedClicked = () => {
  storeNotes.updateNote(route.params.id, noteContent.value);
  router.push("/");
};
</script>

<style scoped>
@import "@/assets/viewEditNote.css";
</style>
