import { initializeApp } from "@react-native-firebase/app";
import firestore from "@react-native-firebase/firestore";

// Firebase Configuration
const firebaseConfig = {
  apiKey: "AIzaSyDYe75IsWE2h_rzT6_pS7CSPFEA7R98g3w",
  authDomain: "to-do-list-new-e4ef9.firebaseapp.com",
  projectId: "to-do-list-new-e4ef9",
  storageBucket: "to-do-list-new-e4ef9.appspot.com",
  messagingSenderId: "1057446361114",
  appId: "1:1057446361114:web:4b427694cd033f9aa079a3",
  measurementId: "G-ZD3YYQB3ZM",
};

// Initialize Firebase App
initializeApp(firebaseConfig);

// Initialize Firestore
export const db = firestore();
