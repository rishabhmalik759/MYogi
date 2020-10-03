import {
  put,
  all,
  call,
  takeEvery,
  takeLatest,
  delay,
} from 'redux-saga/effects';
import { rsf, googleAuth } from '../../firebase';
import * as types from '../types';
import * as firebaseTypes from '../types/firebase';
import { myFirebase } from '../../firebase';
import { removeUser, setUser } from '../actions/userActions';
import { setLoading, setLogin } from '../actions/appCurrentActions';
import { setDocument, getDocument, getCurrentUser } from './firebase';

function* googleLoginSaga() {
  try {
    console.log(myFirebase.auth().currentUser?.uid);

    yield put(setLoading(true));

    yield call(rsf.auth.signInWithPopup, googleAuth);

    const currentUser: firebase.User | null = getCurrentUser();

    if (currentUser) {
      const snapshot = yield call(getDocument, 'Users', currentUser.uid);
      console.log('Snapshot is = ', JSON.stringify(snapshot.data()));
      if (snapshot.exists) {
        const data = snapshot.data();
        yield put(setUser(data));
        yield put(setLogin(true));
        yield put(setLoading(false));
      } else {
        const tempUser: firebaseTypes.IUser = {
          uid: currentUser.uid,
          name: currentUser.displayName,
          type: 'member',
          avatar: currentUser.photoURL,
          email: currentUser.email,
          level: 'Rookie',
        };

        yield call(setDocument, 'Users', currentUser.uid, true, tempUser);
        console.log('created new user');
        yield put(setUser(tempUser));
        yield put(setLogin(true));
        yield put(setLoading(false));
      }
    }
  } catch (error) {
    yield put(setLoading(false));
    console.log(error);
  }
}

function* checkCurrentUser() {
  yield delay(3300);

  const currentUser: firebase.User | null = getCurrentUser();
  try {
    if (null !== currentUser) {
      console.log('user exist = ', currentUser.uid);
      const snapshot = yield call(getDocument, 'Users', currentUser.uid);

      const data = snapshot.data();
      yield put(setUser(data));
      yield put(setLogin(true));
      yield put(setLoading(false));
    } else {
      yield put(setLoading(false));
      console.log('no user');
    }
  } catch (error) {
    yield put(setLoading(false));
    console.log(error);
  }
}

function* logoutUserSaga() {
  try {
    yield put(setLoading(true));
    const data = yield call(rsf.auth.signOut);
    console.log(JSON.stringify(data));
    yield put(removeUser());
    yield put(setLogin(false));
    yield put(setLoading(false));
  } catch (error) {
    yield put(setLoading(false));
    console.log(error);
  }
}

export default function* rootSaga() {
  yield all([
    takeEvery(types.GOOGLE_SIGN_IN, googleLoginSaga),
    takeLatest(types.CHECK_CURRENT_USER, checkCurrentUser),
    takeLatest(types.LOGOUT_USER, logoutUserSaga),
  ]);
}
