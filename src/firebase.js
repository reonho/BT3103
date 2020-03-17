import firebase from 'firebase';

const firebaseConfig = {
    //Key in your database details
    apiKey: "AIzaSyDHhEW02VrdAGmyF2Eo3-gsvTv1jBtWETk",
    authDomain: "bt3103-75b69.firebaseapp.com",
    databaseURL: "https://bt3103-75b69.firebaseio.com",
    projectId: "bt3103-75b69",
    storageBucket: "bt3103-75b69.appspot.com",
    messagingSenderId: "297783790191",
    appId: "1:297783790191:web:89751b965d4acf0c5adb9a",
    measurementId: "G-ZTTZ765GRK"
  };
  
  firebase.initializeApp(firebaseConfig);
  var database = firebase.firestore();
  export default database;