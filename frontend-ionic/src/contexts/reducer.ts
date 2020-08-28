import { TAction } from './actions';
import { IState } from './initialState';
import * as types from './types';

const reducer = (state: IState, action: TAction): IState => {
  const { type, payload } = action;

  switch (type) {
    case types.SET_LOGIN_MODAL:
      return { ...state, loginModal: payload };
    case types.SET_SIGNUP_MODAL:
      return { ...state, signupModal: payload };
    default:
      return state;
  }
};

export default reducer;
