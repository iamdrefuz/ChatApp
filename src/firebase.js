import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBF3AqcXV3lLDLbR2LeCt0V5P8FVp2tQ5Y",
  authDomain: "chatapp-6632f.firebaseapp.com",
  projectId: "chatapp-6632f",
  storageBucket: "chatapp-6632f.appspot.com",
  messagingSenderId: "587416696106",
  appId: "1:587416696106:web:ff380608b970dda5471a53",
  measurementId: "G-MXMM3FJF7P"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore()
