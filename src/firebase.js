// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
 //   };
import firebase from 'firebase'

const firebaseApp = firebase.initializeApp({
    apiKey: "",
    authDomain: "",
    projectId: "",
    storageBucket: "",
    messagingSenderId: "",
    appId: "",
    measurementId: ""
})

const db = firebase.firestore();

export default db;