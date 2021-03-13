import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyCkiMD6SycFMWWXRUBfSAgDvBW2Z4K-Bds",
    authDomain: "ecommerce-grupo6.firebaseapp.com",
    projectId: "ecommerce-grupo6",
    storageBucket: "ecommerce-grupo6.appspot.com",
    messagingSenderId: "760302709306",
    appId: "1:760302709306:web:8011777fdad410467f2303"
  };
 
const firebaseApp = firebase.initializeApp(firebase);

const auth = firebase.auth();

export {auth}; //lo importo en signup