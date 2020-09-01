export interface IAppState {
  login: boolean;
  loading: boolean;
}

export interface IStateModal {
  modalActive: boolean;
  name: string;
}

export interface IAppUserState {
  user: firebase.User | null;
  isAuthenticated?: boolean;
  loading?: boolean;
}

const AppUserInitialState: IAppUserState = {
  user: null,
  isAuthenticated: false,
  loading: false,
};

const AppInitialState: IAppState = {
  login: false,
  loading: false,
};

const ModalInitialState: IStateModal = {
  modalActive: false,
  name: '',
};

export { AppInitialState, ModalInitialState, AppUserInitialState };
