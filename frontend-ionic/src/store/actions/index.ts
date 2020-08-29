import * as types from '../types';
import { IStateModal, IFirebaseState } from '../contexts/initialStates';

interface ISetModal {
  type: types.SET_MODAL;
  payload: IStateModal;
}

interface IAuthUser {
  type: types.FIREBASE_AUTH;
  payload: IFirebaseState;
}

export interface Actions {
  IAuthUser: IAuthUser;
  ISetModel: ISetModal;
}

export const setModal = (payload: IStateModal): ISetModal => ({
  type: types.SET_MODAL,
  payload,
});

export const authUser = (payload: IFirebaseState): IAuthUser => ({
  type: types.FIREBASE_AUTH,
  payload,
});

export type { ISetModal, IAuthUser };
