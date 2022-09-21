import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyBybxVq12Cq2252uLFOj1l-WEQkWTxB6X0",
    authDomain: "linkedin-clone-11bdf.firebaseapp.com",
    projectId: "linkedin-clone-11bdf",
    storageBucket: "linkedin-clone-11bdf.appspot.com",
    messagingSenderId: "486644994270",
    appId: "1:486644994270:web:629ad6ce3f3bdeed53b24f"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };