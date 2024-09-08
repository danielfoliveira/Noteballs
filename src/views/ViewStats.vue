<template>
  <div class="stats">
    <table class="table">
      <thead>
        <tr>
          <th class="table-header">Stat</th>
          <th class="table-header">Value</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Number of notes</td>
          <td>{{ storeNotes.totalNotesCount }}</td>
        </tr>
        <tr>
          <td>Number of caracters (of all notes)</td>
          <td>{{ storeNotes.totalCaracterCount }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup>
/** Imports */
import { useStoreNotes } from "@/stores/storeNotes";

/** Store */
const storeNotes = useStoreNotes();
</script>

<style scoped>
@import "@/assets/viewStats.css";
</style>
