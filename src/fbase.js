import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import "firebase/compat/storage";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCcTneC1JGaukf3wUWjHnlOHTI8kIF84oo",
    authDomain: "nwitter-86228.firebaseapp.com",
    projectId: "nwitter-86228",
    storageBucket: "nwitter-86228.appspot.com",
    messagingSenderId: "451088507590",
    appId: "1:451088507590:web:65db7f90ed426b5decedc7"
};

// Initialize Firebase
//export default firebase.initializeApp(firebaseConfig);
firebase.initializeApp(firebaseConfig);

export const firebaseInstance = firebase;

export const authService = firebase.auth();