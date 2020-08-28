import * as types from './types';

export interface ISetLoginModal {
  type: types.SET_LOGIN_MODAL;
  payload: boolean;
}

export interface ISetSignupModal {
  type: types.SET_SIGNUP_MODAL;
  payload: boolean;
}

export const setLoginModal = (payload: boolean): ISetLoginModal => ({
  type: types.SET_LOGIN_MODAL,
  payload,
});

export const setSignupModal = (payload: boolean): ISetSignupModal => ({
  type: types.SET_SIGNUP_MODAL,
  payload,
});

export type TAction = ISetLoginModal | ISetSignupModal;
