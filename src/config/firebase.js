import firebase from "firebase/compat/app";
import "firebase/compat/auth";


const firebaseConfig = {
    apiKey: "AIzaSyDbsKnRMPnVWfRVZDig_Ke_gNEfAao7Iso",
    authDomain: "file-management-system-e79c9.firebaseapp.com",
    projectId: "file-management-system-e79c9",
    storageBucket: "file-management-system-e79c9.appspot.com",
    messagingSenderId: "866716224890",
    appId: "1:866716224890:web:0d1a5242d423ec66b75ac3"
  };

  const fire = firebase.initializeApp(firebaseConfig);

  export default fire;