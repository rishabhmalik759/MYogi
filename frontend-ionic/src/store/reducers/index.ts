import * as TActions from '../actions';
import { IStateModal, IFirebaseState } from '../contexts/initialStates';
import * as types from '../types';
import firebase from '../../firebase';

const modalReducer = (
  state: IStateModal,
  action: TActions.ISetModal
): IStateModal => {
  const { type, payload } = action;
  const { modalActive, name } = payload;

  switch (type) {
    case types.SET_MODAL:
      // console.log(payload);
      return { ...state, modalActive: modalActive, name: name };
    default:
      return state;
  }
};

const firebaseAuthReducer = (
  state: IFirebaseState,
  action: TActions.IAuthUser
): IFirebaseState => {
  const { type, payload } = action;
  const { user } = payload;

  switch (type) {
    case types.FIREBASE_AUTH:
      console.log(user);
      return { ...state, user: user, authenticated: user !== null };
    default:
      return state;
  }
};

export { modalReducer, firebaseAuthReducer };
