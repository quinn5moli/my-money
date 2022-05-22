import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyCPmXN5zDU1a6uvmqxT6CjCcU3y9Q2FsTs",
    authDomain: "mymoney-c0750.firebaseapp.com",
    projectId: "mymoney-c0750",
    storageBucket: "mymoney-c0750.appspot.com",
    messagingSenderId: "892487340490",
    appId: "1:892487340490:web:e1cccceba14b420763ff33"
  };

  // init firebase

  firebase.initializeApp(firebaseConfig)

  // init service
  const projectFirestore = firebase.firestore()
  const projectAuth = firebase.auth()

  // timestamp
  const timestamp = firebase.firestore.Timestamp

  export { projectFirestore, projectAuth, timestamp }