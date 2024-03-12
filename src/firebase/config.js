// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD0_kDCG4fEtArzerG7J2AUmM5GSBBsilQ",
  authDomain: "expensetracker-d4cef.firebaseapp.com",
  projectId: "expensetracker-d4cef",
  storageBucket: "expensetracker-d4cef.appspot.com",
  messagingSenderId: "14035810117",
  appId: "1:14035810117:web:37757a5ab0defd85ecf02c",
  measurementId: "G-D8XMZWEMM1"
};


initializeApp(firebaseConfig);

const db = getFirestore();
export default db