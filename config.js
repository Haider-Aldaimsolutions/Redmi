import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";


export const firebaseConfig = {
    apiKey: "AIzaSyCuTn8w0qryL1zDbdNmFZkgODIMvWRSwsc",
    authDomain: "redmi-clone.firebaseapp.com",
    projectId: "redmi-clone",
    storageBucket: "redmi-clone.appspot.com",
    messagingSenderId: "751964005047",
    appId: "1:751964005047:web:eb2176fe4727b00d546332",
    measurementId: "G-488JEPSC48"
  };
  


if(!firebase.apps.length){
    firebase.initializeApp(firebaseConfig);
       
}

const auth = firebase.auth()

 export { auth };

