export interface IAppState {
  login: boolean;
  loading: boolean;
}

export interface IStateModal {
  modalActive: boolean;
  name: string;
}

const AppInitialState: IAppState = {
  login: false,
  loading: false,
};

const ModalInitialState: IStateModal = {
  modalActive: false,
  name: '',
};

export { AppInitialState, ModalInitialState };
