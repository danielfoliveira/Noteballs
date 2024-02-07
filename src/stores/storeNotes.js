import { defineStore } from 'pinia'
import { db } from '@/js/firebase'
import {
  collection, onSnapshot, 
  addDoc, doc, deleteDoc, updateDoc,
  query, orderBy, limit 
} from 'firebase/firestore'
import { useStoreAuth } from '@/stores/storeAuth'

let notesCollectionRef
let notesCollectionQuery
let getNotesSnapshot = null
export const useStoreNotes = defineStore('storeNotes', {
  state: () => {
    return { 
      notes: [],
      isLoading: false
    }
  },

  actions: {
    init () {
      const storeAuth = useStoreAuth()

      // initialize our database refs
      notesCollectionRef = collection(db, 'users', storeAuth.user.id, 'notes')
      notesCollectionQuery = query(notesCollectionRef, orderBy('date', 'desc'), limit(5))

      this.getNotes()
    },
    async getNotes () {
      this.isLoading = true

      getNotesSnapshot = onSnapshot(notesCollectionQuery, (querySnapshot) => {
        const notes = []
        querySnapshot.forEach((doc) => {
          const note = {
            id: doc.id,
            date: doc.data().date,
            content: doc.data().content
          }
          notes.push(note)
        })
        this.notes = notes
      }, error => {
        console.error(error.message)
      })

      setTimeout(() => this.isLoading = false, 1000)
      getNotesSnapshot
    },
    async addNote (newNoteContent) {
      const currentDate = new Date().getTime()

      await addDoc(notesCollectionRef, {
        content: newNoteContent,
        date: currentDate,
      })
    },
    async deleteNote (noteId) {
      await deleteDoc(doc(notesCollectionRef, noteId))
    },
    async updateNote (noteId, content) {
      await updateDoc(doc(notesCollectionRef, noteId), {
        content
      })
    },
    clearNotes () {
      this.notes = []

      if (getNotesSnapshot) {
        getNotesSnapshot()
      }
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
