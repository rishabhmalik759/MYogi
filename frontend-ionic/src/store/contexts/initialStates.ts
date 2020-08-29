export interface IAppState {
  login: boolean;
  loading: boolean;
}

export interface IStateModal {
  modalActive: boolean;
  name: string;
}

//firebase
export interface IFirebaseState {
  user: firebase.User | null;
  authenticated?: boolean;
  setUser?: firebase.User | null;
  loadingAuthState?: boolean;
}

const FirebaseAuthInitialState: IFirebaseState = {
  user: null,
  authenticated: false,
  setUser: null,
  loadingAuthState: false,
};

const AppInitialState: IAppState = {
  login: false,
  loading: false,
};

const ModalInitialState: IStateModal = {
  modalActive: false,
  name: '',
};

export { AppInitialState, ModalInitialState, FirebaseAuthInitialState };
