export interface IAppState {
  loading: boolean;
  modal: IModalState;
}

export interface IModalState {
  modal: {
    modalActive: boolean;
    modalName: string;
  };
}

export const InitialAppState = {
  loading: false,
  modal: {
    modalActive: false,
    modalName: false,
  },
};
