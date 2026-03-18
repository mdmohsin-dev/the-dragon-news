// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyD2y1mvbP6qzFpFRH8PMrSdef1Vi3jAS4Q",
    authDomain: "dragon-news-eb039.firebaseapp.com",
    projectId: "dragon-news-eb039",
    storageBucket: "dragon-news-eb039.firebasestorage.app",
    messagingSenderId: "14396629653",
    appId: "1:14396629653:web:21a761f786f211c99b319c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)