// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAMOFWupnMGz2RgSB1GZmEpkntbocgvukM",
  authDomain: "portfolio-0735.firebaseapp.com",
  projectId: "portfolio-0735",
  storageBucket: "portfolio-0735.appspot.com",
  messagingSenderId: "132297938475",
  appId: "1:132297938475:web:810b15ce548c44e33c7c6e",
  measurementId: "G-7PDDV03N0L",
  databaseUrl: "https://portfolio-0735-default-rtdb.firebaseio.com"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const database = getDatabase(app)
export const db = getFirestore();