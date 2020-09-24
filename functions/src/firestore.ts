import * as functions from 'firebase-functions';
import * as admin from 'firebase-admin';
admin.initializeApp();
const db = admin.firestore();

export const userCreated = functions.firestore
  .document('Users/{uid}')
  .onCreate(async (snapshot, context) => {
    const data = snapshot.data();

    const userRef = db.doc(`Users/${data.uid}`);

    return userRef.update({
      type: 'member',
    });
  });
