// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC26wvi1UDVp1bNNKDmkG3u6hgKkIR9Et0",
  authDomain: "batata2-4af50.firebaseapp.com",
  projectId: "batata2-4af50",
  storageBucket: "batata2-4af50.firebasestorage.app",
  messagingSenderId: "154862061619",
  appId: "1:154862061619:web:094531fe1e2d144243fb46"
};
// Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export const FIREBASE_APP = initializeApp(firebaseConfig);
export const FIREBASE_AUTH = getAuth(FIREBASE_APP);
export const FIRESTORE_DB = getFirestore(FIREBASE_APP);