import { IAppState } from '../initialState';
import { IModalAction } from '../actions';
import * as types from '../types';
import { InitialAppState } from '../initialState';

export const modalReducer = (state = InitialAppState, action: IModalAction) => {
  const { payload } = action;
  switch (action.type) {
    case types.SHOW_MODAL:
      return { ...state, modal: payload };
    case types.HIDE_MODAL:
      return { ...state, modal: payload };
    default:
      return state;
  }
};
