// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCb9_0_IxBr2g7cRDvCv5GDruUpBc_5qeA",
    authDomain: "react-firebase-9be69.firebaseapp.com",
    projectId: "react-firebase-9be69",
    storageBucket: "react-firebase-9be69.appspot.com",
    messagingSenderId: "897204354524",
    appId: "1:897204354524:web:79be04231546003791a319",
    measurementId: "G-L2K7F2VTBC",
    dataBaseURL:'https://react-firebase-9be69-default-rtdb.firebaseio.com/'
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export default firebaseConfig;
