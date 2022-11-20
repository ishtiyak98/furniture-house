// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyC-JhW1Kj0PKC43ccsnahc0yk5m01YiutU",
  authDomain: "furniture-house-a6e5b.firebaseapp.com",
  projectId: "furniture-house-a6e5b",
  storageBucket: "furniture-house-a6e5b.appspot.com",
  messagingSenderId: "869616903012",
  appId: "1:869616903012:web:e7c5ba917624726d7d9071"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;
