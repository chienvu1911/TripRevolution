import firebase from "firebase";

const config = {
    apiKey: "AIzaSyA0Gwaiq7IUc6eypwO2r2MEOAMapTyrPuY",
    authDomain: "triprevolution-54e9f.firebaseapp.com",
    databaseURL: "https://triprevolution-54e9f.firebaseio.com",
    projectId: "triprevolution-54e9f",
    storageBucket: "triprevolution-54e9f.appspot.com",
    messagingSenderId: "G-YS7GZP0HJZ",
    appId: "1:683966934062:web:84fddcb9fd2286e6db03bf"
  };
  // Initialize Firebase
  firebase.initializeApp(config);
  
  export default firebase;