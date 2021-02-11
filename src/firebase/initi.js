// Firebase App (the core Firebase SDK) is always required and
// must be listed before other Firebase SDKs
import firebase from 'firebase/app';

// Add the Firebase services that you want to use
import 'firebase/auth';
import 'firebase/firestore';
import 'firebase/storage';

const firebaseConfig = {
  apiKey: 'AIzaSyB4AVaJUG49h-n5urbntYBvdP2yrfNTHtk',
  authDomain: 'general-53eb4.firebaseapp.com',
  databaseURL: 'https://general-53eb4.firebaseio.com',
  projectId: 'general-53eb4',
  storageBucket: 'general-53eb4.appspot.com',
  messagingSenderId: '201149474992',
  appId: '1:201149474992:web:22813dd09c9ecc89',
};

firebase.initializeApp(firebaseConfig);

export default firebase;
