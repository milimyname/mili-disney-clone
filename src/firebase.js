// import { initializeApp } from "firebase/app";
// import { getAuth, GoogleAuthProvider } from "firebase/auth";
// import { getFirestore, doc, getDoc } from "firebase/firestore";
// import { getStorage } from "firebase/storage";
import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDW8rgc-ewSvm-3ZAGWHm_SskvJgFYIGpM",
  authDomain: "mili-disney-plus.firebaseapp.com",
  projectId: "mili-disney-plus",
  storageBucket: "mili-disney-plus.appspot.com",
  messagingSenderId: "291741485963",
  appId: "1:291741485963:web:58e0a8d76e253bec5b7d8e",
  measurementId: "G-PKCR6L2Z9T",
};
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default db;
