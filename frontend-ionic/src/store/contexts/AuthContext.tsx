import React, {
  createContext,
  Dispatch,
  useReducer,
  useContext,
  useEffect,
} from 'react';
import * as reducers from '../reducers';
import * as TActions from '../actions';
import { IAppUserState, AppUserInitialState } from './initialStates';
import firebase from '../../firebase';

export interface IContextProps {
  state: IAppUserState;
  dispatch: Dispatch<TActions.ILoginUser | TActions.ILogoutUser>;
}
const appUserReducer = reducers.appUserReducer;

const AppUserContext = createContext<IContextProps>({
  dispatch: () => {
    // Dispatch initial value
  },
  state: AppUserInitialState,
});

const AppUserProvider: React.FC<{}> = (props: any) => {
  const [state, dispatch] = useReducer(appUserReducer, AppUserInitialState);

  useEffect(() => {
    firebase.auth().onAuthStateChanged((user: firebase.User | null) => {
      if (user) dispatch(TActions.loginUser({ user }));
      else dispatch(TActions.logoutUser());
    });
  }, []);

  return <AppUserContext.Provider value={{ state, dispatch }} {...props} />;
};

function useAppUserContext() {
  return useContext(AppUserContext);
}

export { AppUserProvider, useAppUserContext };
