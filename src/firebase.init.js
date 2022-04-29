// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDGrnNR2wbM_KVYp4tdbvEuMQRkJ9js91A",
  authDomain: "speedo-eb970.firebaseapp.com",
  projectId: "speedo-eb970",
  storageBucket: "speedo-eb970.appspot.com",
  messagingSenderId: "901649130223",
  appId: "1:901649130223:web:9150f11cb44f89626c311a",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
