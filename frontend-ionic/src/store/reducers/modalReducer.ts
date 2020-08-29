import { TAction } from '../actions/modalActions';
import { IStateModal } from '../contexts/modalInitialState';
import * as types from '../types/modalTypes';
import Modal from '../../components/modal/Modal';

const reducer = (state: IStateModal, action: TAction): IStateModal => {
  const { type, payload } = action;
  const { modalActive, name } = payload;

  switch (type) {
    case types.SET_MODAL:
      console.log(payload);
      return { ...state, modalActive: modalActive, name: name };
    default:
      return state;
  }
};

export default reducer;
