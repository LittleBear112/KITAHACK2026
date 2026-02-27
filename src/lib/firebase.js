import { initializeApp } from 'firebase/app'
import { getAuth, GoogleAuthProvider } from 'firebase/auth'
import { getStorage } from 'firebase/storage'
import { getDatabase } from 'firebase/database'
import { getFunctions } from "firebase/functions";

// Replace with your Firebase web app config:
const firebaseConfig = {
  apiKey: "",
  authDomain: "fastjob-db673.firebaseapp.com",
  databaseURL: "https://fastjob-db673-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "fastjob-db673",
  storageBucket: "fastjob-db673.firebasestorage.app",
  messagingSenderId: "376791285981",
  appId: "1:376791285981:web:475cd604c89665a029db34",
  measurementId: "G-G9NFPH3XNT"
}

const app = initializeApp(firebaseConfig)
export const auth = getAuth(app)
export const provider = new GoogleAuthProvider()
export const storage = getStorage(app)
export const db = getDatabase(app)
export const functions = getFunctions(app); // 👈 ADD THIS
