import Types, * as types from '../types';
import { InitialAppState, IAppState, IModalState } from '../initialState';
import { ActionCreator, Action, Dispatch } from 'redux';
import { type } from 'os';

//Modal
export interface IModalAction extends Action {
  type: Types;
  payload: IModalState;
}

export const hideModal: ActionCreator<IModalAction> = (
  payload: IModalState
) => ({
  type: types.HIDE_MODAL,
  payload: payload,
});
export const showModal: ActionCreator<IModalAction> = (
  payload: IModalState
) => ({
  type: types.SHOW_MODAL,
  payload: payload,
});

// export const setModal = (payload: IModalState, action:types.SHOW_MODAL|types.HIDE_MODAL) => (
//   dispatch: Dispatch<IModalAction>
// ) => {
//   switch action

//   dispatch(modalActions(payload));
// };
