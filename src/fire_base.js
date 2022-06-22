import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyDbyVDUT0k5qnCiLK123cO8DaHKAFVvU4I",
    authDomain: "linkedin-cbb6b.firebaseapp.com",
    projectId: "linkedin-cbb6b",
    storageBucket: "linkedin-cbb6b.appspot.com",
    messagingSenderId: "933721856215",
    appId: "1:933721856215:web:dde52b5916dfdbcfaa7892"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };