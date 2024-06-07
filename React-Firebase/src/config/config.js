// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDfysY9PMkUR5AGKue4qaTH26VTfJTDsQ4",
  authDomain: "fir-react-6097a.firebaseapp.com",
  projectId: "fir-react-6097a",
  storageBucket: "fir-react-6097a.appspot.com",
  messagingSenderId: "860736339111",
  appId: "1:860736339111:web:ebd3ba833ae6dc4994af82",
  measurementId: "G-4Y0FMXSJV4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

//Firestore
const db = getFirestore(app);
export default db;
