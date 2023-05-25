// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider } from 'firebase/auth'
import { getFirestore} from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAErw7LVRojk2jUORqfyanUq6buF1kv5P4",
  authDomain: "socialmediapedro-ced9f.firebaseapp.com",
  projectId: "socialmediapedro-ced9f",
  storageBucket: "socialmediapedro-ced9f.appspot.com",
  messagingSenderId: "562510059494",
  appId: "1:562510059494:web:76cc429a17867ae55da827",
  measurementId: "G-NP5NQ4T9BZ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const    auth = getAuth(app)
export const  provider = new GoogleAuthProvider
export const db = getFirestore (app)