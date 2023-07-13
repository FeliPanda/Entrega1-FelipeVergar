// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDhTapXL3GSJYzWVbGUrH5fBZ6g2KC0s7A",
    authDomain: "felipevergarareactfinal.firebaseapp.com",
    projectId: "felipevergarareactfinal",
    storageBucket: "felipevergarareactfinal.appspot.com",
    messagingSenderId: "398280199124",
    appId: "1:398280199124:web:c8539d4f3c109a137c6441"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);