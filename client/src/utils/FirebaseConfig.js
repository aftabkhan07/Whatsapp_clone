import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyCVOBeHp4chj4bZvm-8oWPXuB4ojYUT-ZY",
    authDomain: "whatsapp-clone-3e3ec.firebaseapp.com",
    projectId: "whatsapp-clone-3e3ec",
    storageBucket: "whatsapp-clone-3e3ec.appspot.com",
    messagingSenderId: "149466222372",
    appId: "1:149466222372:web:701e97df3169be0d3dedb1",
    measurementId: "G-3Q6HG76Q2X"
  };

const app = initializeApp(firebaseConfig);
export const firebaseAuth = getAuth(app);