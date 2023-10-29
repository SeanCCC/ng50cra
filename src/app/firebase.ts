import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAlEMMSzuXOi0pLwzznjvmxDt8pyQ17LWE",
  authDomain: "golden-horse-awards.firebaseapp.com",
  projectId: "golden-horse-awards",
  storageBucket: "golden-horse-awards.appspot.com",
  messagingSenderId: "360062202754",
  appId: "1:360062202754:web:701bff265afd888235959b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const storage = getStorage(app);
export const auth = getAuth();

