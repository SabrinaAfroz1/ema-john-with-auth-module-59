// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDnXdeCNH0IlahOM06fvcdoUoJTgDWpsyk",
    authDomain: "ema-john-simple-7fdf1.firebaseapp.com",
    projectId: "ema-john-simple-7fdf1",
    storageBucket: "ema-john-simple-7fdf1.appspot.com",
    messagingSenderId: "316788275921",
    appId: "1:316788275921:web:cb711e4c5fc2251949a3f0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;
