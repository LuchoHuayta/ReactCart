// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDk9PKeQVniS3Oh8elFY8xwlX35Mbg1ICw",
  authDomain: "reactrestaurantcoder.firebaseapp.com",
  projectId: "reactrestaurantcoder",
  storageBucket: "reactrestaurantcoder.appspot.com",
  messagingSenderId: "404193941842",
  appId: "1:404193941842:web:6d7143ad0f678058b4828b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)