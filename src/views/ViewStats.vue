<template>
  <div class="stats">
    <table class="table is-fullwidth">
      <thead>
        <tr>
          <th>Stat</th>
          <th>Value</th>
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
import { useStoreNotes } from '@/stores/storeNotes'

/** Store */
const storeNotes = useStoreNotes()

</script>