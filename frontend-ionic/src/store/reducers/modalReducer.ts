import { IAppState } from '../initialState';
import { IModalAction } from '../actions';
import * as types from '../types';
import { InitialAppState } from '../initialState';

const modalReducer = (state = InitialAppState, action: IModalAction) => {
  switch (action.type) {
    case types.SHOW_MODAL:
      return { ...state, modal: { modalActive: true } };
  }
};
