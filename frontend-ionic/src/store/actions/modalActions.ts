import * as types from '../types/modalTypes';
import { IStateModal } from '../contexts/initialStates';

export interface ISetModal {
  type: types.SET_MODAL;
  payload: IStateModal;
}

export const setModal = (payload: IStateModal): ISetModal => ({
  type: types.SET_MODAL,
  payload,
});

export type TAction = ISetModal;
