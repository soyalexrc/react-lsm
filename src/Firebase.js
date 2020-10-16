import firebase from 'firebase'

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyABnqGl1MsOluwhlhXQIfz92VEgWTh15Dc",
  authDomain: "lsm-1-46b3d.firebaseapp.com",
  databaseURL: "https://lsm-1-46b3d.firebaseio.com",
  projectId: "lsm-1-46b3d",
  storageBucket: "lsm-1-46b3d.appspot.com",
  messagingSenderId: "745879006711",
  appId: "1:745879006711:web:b9ba2d1ccf14329cad12f2",
  measurementId: "G-83N2YV3RF4"
});

const db = firebaseApp.firestore()

export default db
