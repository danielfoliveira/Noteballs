import { defineStore } from 'pinia'
import { createUserWithEmailAndPassword, signOut, signInWithEmailAndPassword, onAuthStateChanged } from 'firebase/auth'
import { auth } from '@/js/firebase'

import { useStoreNotes } from '@/stores/storeNotes'


export const useStoreAuth = defineStore('storeAuth', {
  state: () => {
    return {
      user: {}
    }
  },

  actions: {
    init () {
      onAuthStateChanged(auth, (user) => {
        const storeNotes = useStoreNotes()
        if (user) {
          this.user = {
            id: user.uid,
            email: user.email
          }
          storeNotes.init()
          this.router.push('/')
        } else {
          this.user = {}
          storeNotes.clearNotes()
          this.router.replace('/auth')
        }
      })
    },
    registerUser (credentials) {
      const { email, password } = credentials
      createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed up 
        // ...
      }).catch((error) => {
        console.error(error)
      })
    },
    signOut () {
      signOut(auth).then(() => {
        this.user = {}
      }).catch((error) => {
        console.log(error.message)
      })
    },
    login (credentials) {
      const { email, password } = credentials
      signInWithEmailAndPassword(auth, email, password)
      .then((user) => {
      })
      .catch((error) => {
        console.log(error.message)
      })
    }
  }
})
