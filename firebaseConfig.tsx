// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBbCVwXoMNk_gsS43TOT4uCtjwlmHUFLxs",
    authDomain: "batata-37a11.firebaseapp.com",
    projectId: "batata-37a11",
    storageBucket: "batata-37a11.appspot.com",
    messagingSenderId: "638042564487",
    appId: "1:638042564487:web:7bf6a10926138efb4cd522",
    measurementId: "G-DS68D2Q352"
  };
// Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export const FIREBASE_APP = initializeApp(firebaseConfig);
export const FIREBASE_AUTH = getAuth(FIREBASE_APP);
export const FIRESTORE_DB = getFirestore(FIREBASE_APP);