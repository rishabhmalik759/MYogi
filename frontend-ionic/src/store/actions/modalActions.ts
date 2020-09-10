import * as types from '../types';
import { ActionCreator, Action } from 'redux';

//Modal
export interface IModalActions extends Action {
  type: types.HIDE_MODAL | types.SHOW_MODAL | types.GOOGLE_SIGN_IN;
  payload: string;
}

export const showModal: ActionCreator<IModalActions> = (payload: string) => ({
  type: types.SHOW_MODAL,
  payload: payload,
});

export const hideModal: ActionCreator<IModalActions> = () => ({
  type: types.HIDE_MODAL,
  payload: '',
});
