import firebase from "firebase/app";
import "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyAN2SwFzFXPQ10KbZnZ4xu2fQPJc5ZNm2I",
    authDomain: "react-firebase-auth-a692b.firebaseapp.com",
    projectId: "react-firebase-auth-a692b",
    storageBucket: "react-firebase-auth-a692b.appspot.com",
    messagingSenderId: "549581349201",
    appId: "1:549581349201:web:6aba2e551490507475f370"
};

firebase.initializeApp(firebaseConfig);

export const auth = new firebase.auth();
export const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
export const facebookAuthProvider = new firebase.auth.FacebookAuthProvider();

//export default { auth, googleAuthProvider, facebookAuthProvider };