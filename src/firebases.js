// import firebase from "C:/Users/65818/Documents/Computing notes of all types/youtube-disney-clone/node_modules/firebase";
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore' 
import "firebase/compat/storage";

const firebaseConfig = {
    apiKey: "AIzaSyDmkMloLGy4i-rZfWdNlUjnLaWFMEnGcn0",
    authDomain: "disney-clone-website.firebaseapp.com",
    projectId: "disney-clone-website",
    storageBucket: "disney-clone-website.appspot.com",
    messagingSenderId: "129237337522",
    appId: "1:129237337522:web:10432c751b595b4900d0ab",
    measurementId: "G-YERGYSLXF7"
  };
  

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();
  const storage = firebase.storage();

  
  export {auth, provider, storage}; 
  export default db;
  