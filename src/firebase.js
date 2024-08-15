// src/firebaseConfig.js
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBHbNd5hscxSDZ3SU77JhekoQm-HuPXg-w",
  authDomain: "auth-f74ec.firebaseapp.com",
  projectId: "auth-f74ec",
  storageBucket: "auth-f74ec.appspot.com",
  messagingSenderId: "544067601064",
  appId: "1:544067601064:web:4cb4f47c49288bb64f789d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export { auth, provider, signInWithPopup, signOut };
