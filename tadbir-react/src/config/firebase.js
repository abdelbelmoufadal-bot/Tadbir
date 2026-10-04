import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBk31eKaE7oiK5q6Fv4c3EugT3hGh24fYk",
  authDomain: "smart-flousi.firebaseapp.com",
  projectId: "smart-flousi",
  storageBucket: "smart-flousi.firebasestorage.app",
  messagingSenderId: "405513983927",
  appId: "1:405513983927:web:69f529541948055c14fa32",
  measurementId: "G-PJVK18C44Y"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase services
export const auth = getAuth(app);
export const db = getFirestore(app);
export const googleProvider = new GoogleAuthProvider();

export default app;
