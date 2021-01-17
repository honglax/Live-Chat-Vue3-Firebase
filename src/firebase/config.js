import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const firebaseConfig = {
  apiKey: 'AIzaSyA-eW02N4KiKVQr5vlAQcJ1GDiJOafZhow',
  authDomain: 'live-chat-vue-c940e.firebaseapp.com',
  projectId: 'live-chat-vue-c940e',
  storageBucket: 'live-chat-vue-c940e.appspot.com',
  messagingSenderId: '302530047992',
  appId: '1:302530047992:web:8ffc6e04899c04f159300d',
  measurementId: 'G-3HRERVG5LK'
}

firebase.initializeApp(firebaseConfig)

const projectAuth = firebase.auth()
const projectFirestore = firebase.firestore()
const timeStamp = firebase.firestore.FieldValue.serverTimestamp

export { projectAuth, projectFirestore, timeStamp }
