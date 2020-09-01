import * as types from '../types';

import { IStateModal, IAppUserState } from '../contexts/initialStates';

interface ISetModal {
  type: types.SET_MODAL;
  payload: IStateModal;
}

interface ILoginUser {
  type: types.LOGIN_USER;
  payload: IAppUserState;
}

interface ILogoutUser {
  type: types.LOGOUT_USER;
}

export const setModal = (payload: IStateModal): ISetModal => ({
  type: types.SET_MODAL,
  payload,
});
export const loginUser = (payload: IAppUserState): ILoginUser => ({
  type: types.LOGIN_USER,
  payload: payload,
});

export const logoutUser = (): ILogoutUser => ({
  type: types.LOGOUT_USER,
});

export type { ISetModal, ILogoutUser, ILoginUser };
