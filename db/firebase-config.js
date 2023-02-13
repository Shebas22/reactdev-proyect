// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC44o4Xl5Z5UfwC-lxPel7iFxoslISvVgA",
  authDomain: "ecommerce-gauchito.firebaseapp.com",
  projectId: "ecommerce-gauchito",
  storageBucket: "ecommerce-gauchito.appspot.com",
  messagingSenderId: "509738744041",
  appId: "1:509738744041:web:59b8f95372cc3718c29878"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db= getFirestore(app);