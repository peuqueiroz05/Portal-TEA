import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBWOOvKjOuoaqgTxwS14spf8ckO6iZy-_s",
  authDomain: "portal-tea.firebaseapp.com",
  projectId: "portal-tea",
  storageBucket: "portal-tea.appspot.com",
  messagingSenderId: "437074030519",
  appId: "1:437074030519:web:7af11b04bd7bad8d1f8232",
  measurementId: "G-LKTQ69WHJB"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);

export default app;