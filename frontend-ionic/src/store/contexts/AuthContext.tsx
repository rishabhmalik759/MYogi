import React, { createContext, Dispatch, useReducer, useContext } from 'react';
import * as reducers from '../reducers';
import * as TActions from '../actions';
import { IFirebaseState, FirebaseAuthInitialState } from './initialStates';
import firebase from '../../firebase';
import { useEffect } from 'react';

export interface IFirebaseContextProps {
  state: IFirebaseState;
  dispatch: Dispatch<TActions.IAuthUser>;
}
// export const AuthContext = React.createContext<Partial<ContextProps>>({});
const FirebaseAuthContext = createContext<IFirebaseContextProps>({
  dispatch: () => {
    // Dispatch initial value
  },
  state: FirebaseAuthInitialState,
});
const firebaseAuthReducer = reducers.firebaseAuthReducer;

const FirebaseAuthProvider: React.FC<{}> = (props: any) => {
  const [state, dispatch] = useReducer(
    firebaseAuthReducer,
    FirebaseAuthInitialState
  );

  useEffect(() => {
    firebase.auth().onAuthStateChanged((user: any) => {
      dispatch(TActions.authUser(user));
    });
  }, []);
  return (
    <FirebaseAuthContext.Provider value={{ state, dispatch }} {...props} />
  );
};

function useFirebaseAuthContext() {
  return useContext(FirebaseAuthContext);
}

export { FirebaseAuthProvider, useFirebaseAuthContext };
