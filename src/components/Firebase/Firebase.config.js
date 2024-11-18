// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAXerSHcxjElLfcfptIyrFULWEvuMmbNeE",
  authDomain: "dragon-news-a7c14.firebaseapp.com",
  projectId: "dragon-news-a7c14",
  storageBucket: "dragon-news-a7c14.firebasestorage.app",
  messagingSenderId: "125551664535",
  appId: "1:125551664535:web:5408f2029d190b9970b8d2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;