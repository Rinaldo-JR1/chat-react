import { getFirestore } from 'firebase/firestore';
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyDzRjQbvkBjD4CdcddErt8agrlljaDuOmQ",
    authDomain: "chat-c7414.firebaseapp.com",
    projectId: "chat-c7414",
    storageBucket: "chat-c7414.appspot.com",
    messagingSenderId: "751468411072",
    appId: "1:751468411072:web:a58ee18adf7ad9981dd525",
    measurementId: "G-MSNWXJP0Q4"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore();

