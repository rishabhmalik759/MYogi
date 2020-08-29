import React, { createContext, Dispatch, useReducer, useContext } from 'react';
import * as reducers from '../reducers';
import * as TActions from '../actions';
import { IStateModal, ModalInitialState } from './initialStates';

export interface IContextProps {
  state: IStateModal;
  dispatch: Dispatch<TActions.ISetModal>;
}
const modalReducer = reducers.modalReducer;

const ModalContext = createContext<IContextProps>({
  dispatch: () => {
    // Dispatch initial value
  },
  state: ModalInitialState,
});

const ModalProvider: React.FC<{}> = (props: any) => {
  const [state, dispatch] = useReducer(modalReducer, ModalInitialState);

  return <ModalContext.Provider value={{ state, dispatch }} {...props} />;
};

function useModalContext() {
  return useContext(ModalContext);
}

export { ModalProvider, useModalContext };
