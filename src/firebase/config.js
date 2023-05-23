import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'
import 'firebase/storage'

const firebaseConfig = {
  apiKey: "AIzaSyCA9z-KDDPddTW2Xp8Joz7TkjjFrqXlOVU",
  authDomain: "playlist-vue-fcaef.firebaseapp.com",
  projectId: "playlist-vue-fcaef",
  storageBucket: "playlist-vue-fcaef.appspot.com",
  messagingSenderId: "914204293245",
  appId: "1:914204293245:web:cb482c97aa6fff1edb9914"
};

firebase.initializeApp(firebaseConfig)

const projectFirestore = firebase.firestore()
const projectAuth = firebase.auth()
const projectStorage = firebase.storage()

const timestamp = firebase.firestore.FieldValue.serverTimestamp

export { projectFirestore, projectAuth, projectStorage, timestamp };