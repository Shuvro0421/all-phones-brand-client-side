// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAjQxmGaPCDjfKKU56jCUwmmIKcIACr0e8",
  authDomain: "all-phones-brand-auth.firebaseapp.com",
  projectId: "all-phones-brand-auth",
  storageBucket: "all-phones-brand-auth.appspot.com",
  messagingSenderId: "250968911522",
  appId: "1:250968911522:web:d6aa7f10b24014f9ec71fb"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)

export default auth