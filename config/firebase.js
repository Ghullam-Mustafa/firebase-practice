// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore/lite";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA9FtDTbw8X4SyracjpbvNMIJsGRoIvH8g",
  authDomain: "fir-practice-e41f2.firebaseapp.com",
  projectId: "fir-practice-e41f2",
  storageBucket: "fir-practice-e41f2.appspot.com",
  messagingSenderId: "695737311841",
  appId: "1:695737311841:web:bdca874a1f277aede88020"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const fireStore = getFirestore(app)
// Initialize Firebase Authentication and get a reference to the service
export const  auth = getAuth(app);

