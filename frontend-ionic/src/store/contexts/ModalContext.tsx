import React, { createContext, Dispatch, useReducer, useContext } from 'react';
import reducer from '../reducers/modalReducer';
import { TAction } from '../actions/modalActions';
import { IStateModal, ModalInitialState } from './initialStates';

export interface IContextProps {
  state: IStateModal;
  dispatch: Dispatch<TAction>;
}

const ModalContext = createContext<IContextProps>({
  dispatch: () => {
    // Dispatch initial value
  },
  state: ModalInitialState,
});

const ModalProvider: React.FC<{}> = (props: any) => {
  const [state, dispatch] = useReducer(reducer, ModalInitialState);

  return <ModalContext.Provider value={{ state, dispatch }} {...props} />;
};

function useModalContext() {
  return useContext(ModalContext);
}

export { ModalProvider, useModalContext };
