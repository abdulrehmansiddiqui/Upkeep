import * as firebase from "firebase";
import "firebase/auth";
import "firebase/database";
import "firebase/storage";

var firebaseConfig = {
  apiKey: "AIzaSyCw17uvr0MJscrm35MVX_-5v-NTu8yx6HU",
  authDomain: "upkeepp125.firebaseapp.com",
  databaseURL: "https://upkeepp125.firebaseio.com",
  projectId: "upkeepp125",
  storageBucket: "upkeepp125.appspot.com",
  messagingSenderId: "465881332647",
  appId: "1:465881332647:web:a0fc55c55074e65cfbd482",
  measurementId: "G-7S5CKCJ34G"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
// firebase.analytics();

export default firebase;
