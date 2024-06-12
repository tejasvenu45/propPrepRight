// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDgLds0Q0wFT0ZnN2GlBcZIxqan46V7fl4",
  authDomain: "prepright-ef54b.firebaseapp.com",
  databaseURL: "https://prepright-ef54b-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "prepright-ef54b",
  storageBucket: "prepright-ef54b.appspot.com",
  messagingSenderId: "889921959980",
  appId: "1:889921959980:web:44e260b3a9f8724bddb989",
  measurementId: "G-6D2B8KMQ5X"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);