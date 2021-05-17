// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
 //   };
import firebase from 'firebase'

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyCfFy36pxGEWs1s7qhxCiD2-oD79dpXJYM",
    authDomain: "to-do-app-50f01.firebaseapp.com",
    projectId: "to-do-app-50f01",
    storageBucket: "to-do-app-50f01.appspot.com",
    messagingSenderId: "718919010590",
    appId: "1:718919010590:web:527ef7f89a0cfbfcff610f",
    measurementId: "G-N8XHVQNPQZ"
})

const db = firebase.firestore();

export default db;