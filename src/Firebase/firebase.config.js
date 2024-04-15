// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCE8Cdw_RLa4YwW3nq8zcx9FG1Gvu4Ita8",
  authDomain: "evergreen-a9.firebaseapp.com",
  projectId: "evergreen-a9",
  storageBucket: "evergreen-a9.appspot.com",
  messagingSenderId: "288024372857",
  appId: "1:288024372857:web:87c6df4811b927c8a956a8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;