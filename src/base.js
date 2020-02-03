import * as firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyC25kCfdnqRqJH7wO9kYuRv6q_uNZR5C7k",
    authDomain: "express-b0920.firebaseapp.com",
    databaseURL: "https://express-b0920.firebaseio.com",
    projectId: "express-b0920",
    storageBucket: "express-b0920.appspot.com",
    messagingSenderId: "120598484872",
    appId: "1:120598484872:web:5a1e6deabca5c31451cc3d",
    measurementId: "G-FHNX8F7GP6"
  };

export const App = firebase.initializeApp(firebaseConfig);
