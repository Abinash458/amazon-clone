import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyB8C9XFTWnOJqLfTRmoI6EjDknSr-kgz8s",
  authDomain: "clone-7cd55.firebaseapp.com",
  projectId: "clone-7cd55",
  storageBucket: "clone-7cd55.appspot.com",
  messagingSenderId: "979958049814",
  appId: "1:979958049814:web:ae89eecb626757c4b15937",
  measurementId: "G-6M4PP5RJFF"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

const auth = firebase.auth();

export { db, auth };