import firebase from 'firebase/app';
import firebaseConfig from './config/firebase';

require('firebase/auth');
require('firebase/firestore');

firebase.initializeApp(firebaseConfig);
export default firebase;
