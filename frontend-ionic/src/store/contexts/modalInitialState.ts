export interface IStateModal {
  modalActive: boolean;
  name: string;
}

const ModalInitialState: IStateModal = {
  modalActive: false,
  name: '',
};

export { ModalInitialState };
