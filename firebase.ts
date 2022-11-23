// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAU5HQx4bbv_PeO9IU2xlzK2e4wO9POT58",
  authDomain: "netflix-clone-d0c48.firebaseapp.com",
  projectId: "netflix-clone-d0c48",
  storageBucket: "netflix-clone-d0c48.appspot.com",
  messagingSenderId: "1006290420584",
  appId: "1:1006290420584:web:78f3bc805850ae9f3a4cdd",
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const auth = getAuth();

export default app;
export { auth, db };
