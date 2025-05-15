// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth} from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC97eOhLVsjprx7B24e4OZDt36xo4W0ftA",
  authDomain: "fir-2d8d6.firebaseapp.com",
  projectId: "fir-2d8d6",
  storageBucket: "fir-2d8d6.firebasestorage.app",
  messagingSenderId: "285876139091",
  appId: "1:285876139091:web:eb3d89129c71ddb65582a6",
  measurementId: "G-KDK8SY8VL7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app)