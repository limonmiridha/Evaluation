import firebase from "firebase";
const firebaseConfig = {
    apiKey: "AIzaSyA7Cx2u9RnsgzBSRFJ47KeVNvhTnzuDLdU",
    authDomain: "project-d5035.firebaseapp.com",
    databaseURL: "https://project-d5035-default-rtdb.firebaseio.com",
    projectId: "project-d5035",
    storageBucket: "project-d5035.appspot.com",
    messagingSenderId: "811661307017",
    appId: "1:811661307017:web:d84f45e400f69a1116ea58",
    measurementId: "G-9D1KE624XW"
  };
  
  // Initialize Firebase
  const fire = firebase.initializeApp(firebaseConfig);
  export default fire;