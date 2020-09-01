import * as TActions from '../actions';
import { IStateModal, IAppUserState } from '../contexts/initialStates';
import * as types from '../types';
// import firebase from '../../firebase';

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

const appUserReducer = (
  state: IAppUserState,
  action: TActions.ILoginUser | TActions.ILogoutUser
): IAppUserState => {
  switch (action.type) {
    case types.LOGIN_USER:
      return {
        ...state,
        user: action.payload.user,
        isAuthenticated: true,
        loading: false,
      };
    case types.LOGOUT_USER:
      return { ...state, user: null, isAuthenticated: false, loading: false };
    default:
      return state;
  }
};

export { modalReducer, appUserReducer };
