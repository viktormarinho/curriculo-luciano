// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";

import { getAnalytics } from "firebase/analytics";

// TODO: Add SDKs for Firebase products that you want to use

// https://firebase.google.com/docs/web/setup#available-libraries


// Your web app's Firebase configuration

// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {

  apiKey: "AIzaSyBvr3pJGNbBLADLONtIWkGqw_vKacI57cY",

  authDomain: "viktor-marinho.firebaseapp.com",

  projectId: "viktor-marinho",

  storageBucket: "viktor-marinho.appspot.com",

  messagingSenderId: "654021397934",

  appId: "1:654021397934:web:90631e4027f6dd3858cc3f",

  measurementId: "G-YKH4RXXH4F"

};


// Initialize Firebase

const app = initializeApp(firebaseConfig);

const analytics = getAnalytics(app);