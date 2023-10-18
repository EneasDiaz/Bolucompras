import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBGvkykeaRoovpqbZsJdFV5vIH2LyLsbgY",
  authDomain: "bolucompras-e-commerce.firebaseapp.com",
  projectId: "bolucompras-e-commerce",
  storageBucket: "bolucompras-e-commerce.appspot.com",
  messagingSenderId: "490425442086",
  appId: "1:490425442086:web:ce8ae60c98c4491dfd2be7"
};

// Initialize Firebase
initializeApp(firebaseConfig);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
