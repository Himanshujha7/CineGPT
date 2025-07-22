// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth} from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCG2Pz-MCUd4ZY4MkNpxxPAbqNXk5on4-o",
  authDomain: "cinegpt-fb7af.firebaseapp.com",
  projectId: "cinegpt-fb7af",
  storageBucket: "cinegpt-fb7af.firebasestorage.app",
  messagingSenderId: "247060095296",
  appId: "1:247060095296:web:567a5243d9fa37382adaa5",
  measurementId: "G-ZBPWSG9X05"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();