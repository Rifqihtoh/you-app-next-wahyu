// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD_K0BiOG4OmDNuc78Q1NjHsOp1oBbutg0",
  authDomain: "test1-50b58.firebaseapp.com",
  projectId: "test1-50b58",
  storageBucket: "test1-50b58.appspot.com",
  messagingSenderId: "662016335786",
  appId: "1:662016335786:web:3ef50906dc5ce50a9915d3",
  measurementId: "G-P4ZRLBJDZ7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);