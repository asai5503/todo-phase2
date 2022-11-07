// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCEfNoAVcG4nxXDVmv1P1FMXsyckzU8QZI",
  authDomain: "todo-app-3531a.firebaseapp.com",
  projectId: "todo-app-3531a",
  storageBucket: "todo-app-3531a.appspot.com",
  messagingSenderId: "932885891518",
  appId: "1:932885891518:web:fbc86fbb48a2a4973e51ef"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;