import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'
const firebaseConfig = {
    //Your Own
    apiKey: "AIzaSyCZdT6T3AFGdFzJvJVNJr_XljHMF5LN2RQ",
    
  authDomain: "sign-in-authentication-27404.firebaseapp.com",

  projectId: "sign-in-authentication-27404",

  storageBucket: "sign-in-authentication-27404.appspot.com",

  messagingSenderId: "1013327019624",

  appId: "1:1013327019624:web:299c6d452dc7f89f24c5dd",

  measurementId: "G-4HJ3915R7G"
};

export const app = initializeApp(firebaseConfig);
export const database = getFirestore(app);