import firebase from "firebase";
import "firebase/firestore";
import "firebase/auth";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAIH_djkd1BzFn6EiLBNb4Z08fBqRTedpI",
  authDomain: "myblog-9ca88.firebaseapp.com",
  projectId: "myblog-9ca88",
  storageBucket: "myblog-9ca88.appspot.com",
  messagingSenderId: "87563911308",
  appId: "1:87563911308:web:eee9eb5316b71adfe27ba9",
  measurementId: "G-0HMNF8KE4Y",
};
let app;

if (firebase.apps.length === 0) {
  app = firebase.initializeApp(firebaseConfig);
} else {
  app = firebase.app();
}

const db = app.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { db, auth, provider };
