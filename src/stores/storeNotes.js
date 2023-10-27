import { defineStore } from 'pinia'

export const useStoreNotes = defineStore('storeNotes', {
  state: () => {
    return { 
      notes: [{
        id: 'id1',
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
      },
      {
        id: 'id2',
        content: 'This is a fucking note'
      }]
    }
  },

  actions: {
    addNote (newNoteContent) {
      const currentDate = new Date().getTime(),
            id = currentDate.toString()

      const note = {
        id,
        content: newNoteContent
      }

      this.notes.unshift(note)
    },
    deleteNote (noteId) {
      this.notes = this.notes.filter(note => note.id !== noteId)
    }
  }
})
