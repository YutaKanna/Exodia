import firebase from "firebase/app"

if (!firebase.apps.length) {
  firebase.initializeApp({
    apiKey: "AIzaSyCSrg0yalHlFrukbuulbnArVdboIF3ol9c",
    authDomain: "good-bad-1f1f3.firebaseapp.com",
    databaseURL: "https://good-bad-1f1f3.firebaseio.com",
    projectId: "good-bad-1f1f3",
    storageBucket: "gs://good-bad-1f1f3.appspot.com",
    messagingSenderId: "346980283972",
  })
}

export default firebase