import firebase from 'firebase';
import firebaseConfig from './config/firebase';
import ReduxSagaFirebase from 'redux-saga-firebase';
import '@firebase/firestore';
// require('firebase/auth');
// require('firebase/firestore');

const myFirebase = firebase.initializeApp(firebaseConfig);
const googleAuth = new firebase.auth.GoogleAuthProvider();
googleAuth.addScope('profile');
googleAuth.addScope('email');
const facebookAuth = new firebase.auth.FacebookAuthProvider();
const twitterAuth = new firebase.auth.TwitterAuthProvider();

const rsf = new ReduxSagaFirebase(myFirebase);
//database
// rsf.firestore.
export { rsf, googleAuth, facebookAuth, twitterAuth, myFirebase };
