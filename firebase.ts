import { getApp, getApps, initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyBTmNlOsJ3j-71eOyeSaawJYG4Od7kV-Sc",
  authDomain: "chatgpt-6e92e.firebaseapp.com",
  projectId: "chatgpt-6e92e",
  storageBucket: "chatgpt-6e92e.appspot.com",
  messagingSenderId: "708926232676",
  appId: "1:708926232676:web:9fe9effa259757a8bc6771"
};

// Initialize Firebase
const app = getApps().length ? getApp() : initializeApp(firebaseConfig)
const db = getFirestore(app)

export { db }
