// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use

// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration

const firebaseConfig = {
  apiKey: "AIzaSyDsRcz2xN3cV-es8xuxr87rDUgGQd2TZ_I",
  authDomain: "cop-4331-large.firebaseapp.com",
  projectId: "cop-4331-large",
  storageBucket: "cop-4331-large.appspot.com",
  messagingSenderId: "75561610194",
  appId: "1:75561610194:web:9acd6766e39dea56e9760b",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { app, auth, db };
