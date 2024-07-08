import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyD2gDbL8G6buPAEhO2xv5XpoNCVXEQZ4Ko",
  authDomain: "linkedin-clone-9f19d.firebaseapp.com",
  projectId: "linkedin-clone-9f19d",
  storageBucket: "linkedin-clone-9f19d.appspot.com",
  messagingSenderId: "653314723662",
  appId: "1:653314723662:web:2e2dd49680de74b1a3581f",
  measurementId: "G-CGJBPYBW0D",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
