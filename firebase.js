import "firebase/auth";
import "firebase/firestore";
import firebase from 'firebase/app';

const firebaseConfig = {
  apiKey: "AIzaSyDb4DtHgZtHyTMz9CH_Ew0HAojeTYlcUtw",
  authDomain: "signal-clone-ced04.firebaseapp.com",
  projectId: "signal-clone-ced04",
  storageBucket: "signal-clone-ced04.appspot.com",
  messagingSenderId: "202716420901",
  appId: "1:202716420901:web:b6c7841595ffdbe2d458cc"
};

let app;

if (firebase.apps.length === 0) {
  app = firebase.initializeApp(firebaseConfig);
} else {
  app = firebase.app();
}

const db = app.firestore();
const auth = firebase.auth();
const time = firebase.firestore.FieldValue.serverTimestamp()

export {db, auth, time};
