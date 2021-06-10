import firebase from 'firebase';
require('@firebase/firestore')

var firebaseConfig = {
    apiKey: "AIzaSyAQyhEMVZMF8HArEta2fS0v0PoRTcm_cT8",
    authDomain: "book-santa-fb0cb.firebaseapp.com",
    databaseURL: "https://book-santa-fb0cb.firebaseio.com",
    projectId: "book-santa-fb0cb",
    storageBucket: "book-santa-fb0cb.appspot.com",
    messagingSenderId: "845638774873",
    appId: "1:845638774873:web:0ae30b43db292200210148"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
