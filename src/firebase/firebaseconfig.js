
import firebase from "firebase";

var firebaseConfig = {
    apiKey: "AIzaSyBL46yUDdxKDb4ZFWzUltj01a1lTTCMoV0",
    authDomain: "login-role.firebaseapp.com",
    projectId: "login-role",
    storageBucket: "login-role.appspot.com",
    messagingSenderId: "1018225487072",
    appId: "1:1018225487072:web:d27326a671462d264f7485",
    measurementId: "G-YKDK8FR6KY"
};

//---------------------------------------------------------------- Initialize Firebase----------------------------------------------
const fir=firebase.initializeApp(firebaseConfig);

export default fir.database().ref();