// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCv9NqbOyfJJMzXR3mNB5hSW3ra5yoHAbs",
  authDomain: "dragon-news-65cc6.firebaseapp.com",
  projectId: "dragon-news-65cc6",
  storageBucket: "dragon-news-65cc6.firebasestorage.app",
  messagingSenderId: "286093072045",
  appId: "1:286093072045:web:d1bb89b337f45de9b3d824",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
