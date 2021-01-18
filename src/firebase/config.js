import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const firebaseConfig = {
  apiKey: 'AIzaSyCpDvMFDufJLnbUBxlo4yz9-YFWMLMmDaU',
  authDomain: 'phile-chat-vue3.firebaseapp.com',
  projectId: 'phile-chat-vue3',
  storageBucket: 'phile-chat-vue3.appspot.com',
  messagingSenderId: '91737800791',
  appId: '1:91737800791:web:1cda293a5c3cdc96d96312',
  measurementId: 'G-F8TJ9B656R'
}

firebase.initializeApp(firebaseConfig)

const projectAuth = firebase.auth()
const projectFirestore = firebase.firestore()
const timeStamp = firebase.firestore.FieldValue.serverTimestamp

export { projectAuth, projectFirestore, timeStamp }
