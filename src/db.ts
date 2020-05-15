import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/analytics";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDNIlcIIrVAeCsPMS_qu0WcCE_EMp6tOOQ",
  authDomain: "collectif-leads.firebaseapp.com",
  databaseURL: "https://collectif-leads.firebaseio.com",
  projectId: "collectif-leads",
  storageBucket: "collectif-leads.appspot.com",
  messagingSenderId: "695125903788",
  appId: "1:695125903788:web:4a1de0c86daf89c38a1209",
  measurementId: "G-EG1XZS4VFM"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

const db = firebase.firestore();

export default db;
