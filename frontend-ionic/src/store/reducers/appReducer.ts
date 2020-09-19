import * as types from '../types';
import { Reducer } from 'react';
import { IAppCurrentActions } from '../actions/appCurrentActions';

export type IAppCurrentState = {
  login?: boolean;
  loading?: boolean;
};

const initialAppState: IAppCurrentState = {
  login: false,
  loading: true,
};

export const appCurrentReducer: Reducer<
  IAppCurrentState,
  IAppCurrentActions
> = (state = initialAppState, action): IAppCurrentState => {
  const { type, payload } = action;

  switch (type) {
    case types.SET_LOADING:
      return {
        ...state,
        loading: payload,
      };
    case types.SET_LOGIN:
      return { ...state, login: payload };
    default:
      return state;
  }
};
