import { IModalActions } from '../actions/modalActions';
import * as types from '../types';
import { Reducer } from 'react';

export type IModalState = {
  modalActive: boolean;
  modalName: string;
};

const initialState: IModalState = {
  modalActive: false,
  modalName: '',
};

export const modalReducer: Reducer<IModalState, IModalActions> = (
  state = initialState,
  action
): IModalState => {
  const { type, payload } = action;

  switch (type) {
    case types.SHOW_MODAL:
      return {
        ...state,
        modalActive: true,
        modalName: payload,
      };
    case types.HIDE_MODAL:
      return { ...state, modalActive: false, modalName: '' };
    default:
      return state;
  }
};
