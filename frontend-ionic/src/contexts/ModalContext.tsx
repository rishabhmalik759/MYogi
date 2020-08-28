import React, { createContext, Dispatch, useReducer, useContext } from 'react';
import { TAction } from './actions';
import initialState, { IState } from './initialState';
import reducer from './reducer';

interface IContextProps {
  state: IState;
  dispatch: Dispatch<TAction>;
}
const ModalContext = createContext<IContextProps>({
  dispatch: () => {
    // Dispatch initial value
  },
  state: initialState,
});

const ModalProvider: React.FC<{}> = (props: any) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return <ModalContext.Provider value={{ state, dispatch }} {...props} />;
};

function useModalContext() {
  return useContext(ModalContext);
}

export { ModalProvider, useModalContext };
