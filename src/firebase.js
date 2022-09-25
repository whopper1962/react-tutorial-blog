import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyDxrUWr3o8rLoSDnywFWR9sud5_eU0r1fk",
  authDomain: "react-tutorial-blog.firebaseapp.com",
  projectId: "react-tutorial-blog",
  storageBucket: "react-tutorial-blog.appspot.com",
  messagingSenderId: "825503546237",
  appId: "1:825503546237:web:2584f75f1eafde8c72ea14"
};

const app = initializeApp(firebaseConfig);

// Authentication
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

// Database
const db = getFirestore(app);

export {
  auth,
  provider,
  db
};
