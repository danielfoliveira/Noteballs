import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: 'AIzaSyBBmem2Zw6iki3fWChdJTPY2w0AUXzujqo',
  authDomain: 'noteballs-fe570.firebaseapp.com',
  projectId: 'noteballs-fe570',
  storageBucket: 'noteballs-fe570.appspot.com',
  messagingSenderId: '1057083478702',
  appId: '1:1057083478702:web:f2c7332b2eaeb947e8133f'
}

const app = initializeApp(firebaseConfig)

//firebase database
const db = getFirestore(app)

export {
  db
}