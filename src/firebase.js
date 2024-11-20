import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyA3L08CVCHpiGVqaq1_9Hz3o3APtdkTeHM",
    authDomain: "firechat-b5616.firebaseapp.com",
    projectId: "firechat-b5616",
    storageBucket: "firechat-b5616.appspot.com",
    messagingSenderId: "815486042387",
    appId: "1:815486042387:web:8be70a2ec305de9a935ae6",
    measurementId: "G-70HD50BMG9"
})


const db = firebaseApp.firestore()

const auth = firebase.auth()

export { db, auth }