import { defineStore } from 'pinia'
import { db } from '@/js/firebase'
import { collection, onSnapshot } from 'firebase/firestore' 


export const useStoreNotes = defineStore('storeNotes', {
  state: () => {
    return { 
      notes: []
    }
  },

  actions: {
    async getNotes () {
      onSnapshot(collection(db, 'notes'), (querySnapshot) => {
        const notes = []
        querySnapshot.forEach((doc) => {
          const note = {
            id: doc.id,
            content: doc.data().content
          }
          notes.push(note)
        })
        this.notes = notes
      })
    },
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
    },
    updateNote (id, content) {
      let index = this.notes.findIndex(note => note.id === id)
      this.notes[index].content = content
    }
  },

  getters: {
    getNoteContent: (state) => {
      return (id) => {
        return state.notes.find(note => note.id === id)
      }
    },
    totalNotesCount: (state) => {
      return state.notes.length
    },
    totalCaracterCount: (state) => {
      return state.notes.reduce((total, note) => total += note.content.length, 0)
    }
  }
})
