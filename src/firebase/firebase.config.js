// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBUnwLNMlVtVnvsBHo76au_8mXEVIVKw1s",
  authDomain: "router-firebase-practice-f50e2.firebaseapp.com",
  projectId: "router-firebase-practice-f50e2",
  storageBucket: "router-firebase-practice-f50e2.appspot.com",
  messagingSenderId: "262200702928",
  appId: "1:262200702928:web:4850f32e09cd27330cebd5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);