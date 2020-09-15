import * as types from '../types';
import * as firebaseTypes from '../types/firebase';
import { ActionCreator, Action } from 'redux';

//Modal
export interface IUserActions extends Action {
  type: types.SET_USER | types.REMOVE_USER;
  payload?: firebaseTypes.IUser;
}

export const setUser: ActionCreator<IUserActions> = (
  payload: firebaseTypes.IUser
) => ({
  type: types.SET_USER,
  payload: payload,
});
export const removeUser: ActionCreator<IUserActions> = () => ({
  type: types.REMOVE_USER,
});
