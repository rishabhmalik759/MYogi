import { put, all, call, takeEvery } from 'redux-saga/effects';
import { rsf, googleAuth, facebookAuth } from '../../firebase';
import * as types from '../types';
import { userInfo } from 'os';
import * as firebaseTypes from '../types/firebase';
import { myFirebase } from '../../firebase';
import { setUser } from '../actions/userActions';
import { setLoading, setLogin } from '../actions/appCurrentActions';

function* googleLoginSaga() {
  try {
    console.log(myFirebase.auth().currentUser?.uid);

    yield put(setLoading(true));
    myFirebase
      .auth()
      .setPersistence('local')
      .then(yield call(rsf.auth.signInWithPopup, googleAuth));
    // const user = data.user;
    // console.log(data);
    if (myFirebase.auth().currentUser) {
      const currentUser: firebase.User = myFirebase.auth().currentUser!;
      const tempUser: firebaseTypes.IUser = {
        User: {
          uid: currentUser.uid,
          name: currentUser.displayName,
          type: 'rookie',
          avatar: currentUser.photoURL,
          email: currentUser.email,
        },
      };
      yield put(setUser(tempUser));
      yield put(setLogin(true));
      //console.log(JSON.stringify(tempUser));
    }
    yield put(setLoading(false));

    // var user: firebaseTypes.user = {
    //   user_id: data.idToken,
    //   provider: data.providerId,
    // };

    // user = snapshot.doc(data.idToken);

    // const doc = yield call(rsf.firestore.addDocument, 'Users', data.idToken);
    // console.log(doc);
    // const temp = yield call(
    //   rsf.firestore.setDocument,
    //   `Users/${data.idToken}`,
    //   { user },
    //   { merge: true }
    // );

    // console.log(temp);
    // const snapshot = yield call(rsf.firestore.getCollection, 'Users');
    // snapshot.doc(data.idToken).set({ user });
    // snapshot.forEach((user: any) => {
    //   console.log(user.id);
    // });
  } catch (error) {
    console.log(error);
  }
}

function* getCollection() {
  const snapshot = yield call(rsf.firestore.getCollection, 'users');
  let users: any;
  snapshot.forEach((user: any) => {
    users = {
      ...users,
      [user.id]: user.data(),
    };
  });

  console.log(users);
}

export default function* rootSaga() {
  yield all([takeEvery(types.GOOGLE_SIGN_IN, googleLoginSaga)]);
}
