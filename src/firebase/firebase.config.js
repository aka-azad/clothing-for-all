// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBnb0TKAaiU9qWHmTBdnle7HkCXlOVS8ms",
  authDomain: "assignment-9-of-batch-10.firebaseapp.com",
  projectId: "assignment-9-of-batch-10",
  storageBucket: "assignment-9-of-batch-10.firebasestorage.app",
  messagingSenderId: "330762413939",
  appId: "1:330762413939:web:20837c99c2d6e082cec706",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
