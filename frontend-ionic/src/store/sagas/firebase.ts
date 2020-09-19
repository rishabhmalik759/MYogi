import { call } from 'redux-saga/effects';
import { rsf } from '../../firebase';
import { myFirebase } from '../../firebase';
function getCurrentUser() {
  return myFirebase.auth().currentUser;
}

function* getDocument(collectionName: string, documentId: string) {
  return yield call(
    rsf.firestore.getDocument,
    `${collectionName}/${documentId}`
  );
}

function* setDocument(
  collectionName: string,
  documentId: string,
  merge: boolean,
  data: any
) {
  return yield call(
    rsf.firestore.setDocument,
    `${collectionName}/${documentId}`,
    data,
    { merge: merge }
  );
}

export { setDocument, getDocument, getCurrentUser };
