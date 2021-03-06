import firebase from "firebase/compat/app";
import "firebase/compat/auth"
import "firebase/compat/database"
// import 'firebase/storage'
import "firebase/compat/storage"

const firebaseConfig = {
    apiKey: "AIzaSyA-ICXUSpPGhU4jfGOcdniuLdPRBzvpiBw",
    authDomain: "hack-f5ca0.firebaseapp.com",
    databaseURL: "https://hack-f5ca0-default-rtdb.firebaseio.com",
    projectId: "hack-f5ca0",
    storageBucket: "hack-f5ca0.appspot.com",
    messagingSenderId: "1033773724901",
    appId: "1:1033773724901:web:0e1257684fd03ab743500c"
  };

firebase.initializeApp(firebaseConfig)
const databaseRef = firebase.database().ref()
export const auth = firebase.auth()
const storage = firebase.storage()
export const nameRef = databaseRef.child("names")
export {storage,firebase as default} 