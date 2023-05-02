// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBdeMnKwZf6iGlesrr7gwhpu4-idF851I4",
  authDomain: "react-netflix-9bcd3.firebaseapp.com",
  projectId: "react-netflix-9bcd3",
  storageBucket: "react-netflix-9bcd3.appspot.com",
  messagingSenderId: "1079056226414",
  appId: "1:1079056226414:web:cbb7e5923b030e12f56e7f",
  measurementId: "G-GZVP9WGNP9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const firebaseAuth = getAuth(app);