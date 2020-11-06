// importing firebase to use it's functionalities
import firebase from "firebase/app";

// importing firebase authentication and firestore

import "firebase/auth";
import "firebase/firestore";

// the firebase config file for the app;

const firebaseConfig = {
  apiKey: "AIzaSyAmC4ZBbRnhNTL7TMT_uzKsbAfAvUtDIqM",
  authDomain: "store-db-ccb8a.firebaseapp.com",
  databaseURL: "https://store-db-ccb8a.firebaseio.com",
  projectId: "store-db-ccb8a",
  storageBucket: "store-db-ccb8a.appspot.com",
  messagingSenderId: "475841183842",
  appId: "1:475841183842:web:5dc01c380441c6ec2a113b",
};

// initializing farebase with the config file .
firebase.initializeApp(firebaseConfig);

// exporting the auth and firestore utilities 
export const auth = firebase.auth(); 
export const firestore = firebase.firestore();

//  setting sign in with google . we can use others like facebook , twitter ...
const provider = new firebase.auth.GoogleAuthProvider();

// setting the prompt type
provider.setCustomParameters({ prompt: "select_account" });

// exporting the sign in with google popup window .
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
