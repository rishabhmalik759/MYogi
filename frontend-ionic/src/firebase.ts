import firebase from 'firebase/app';
import firebaseConfig from './config/firebase';

require('firebase/auth');

firebase.initializeApp(firebaseConfig);
export default firebase;
