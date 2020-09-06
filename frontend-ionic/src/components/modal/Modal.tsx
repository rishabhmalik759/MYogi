import React, { Fragment, Dispatch } from 'react';

import { IonModal } from '@ionic/react';

import { useSelector, useDispatch } from 'react-redux';
import { IModalActions, hideModal } from '../../store/actions/modalActions';
import { AppState } from '../../store/reducers/';

import LoginModal, { loginModalName } from './auth/LoginModal';
import SignUpModal, { signUpModalName } from './auth/SignUpModal';

const Modal: React.FC = () => {
  const { modalName, modalActive } = useSelector(
    (state: AppState) => state.modal
  );
  const modalDispatch = useDispatch<Dispatch<IModalActions>>();

  const handleModalClose = () => {
    modalDispatch(hideModal());
  };

  return (
    <Fragment>
      <IonModal isOpen={modalActive} onDidDismiss={handleModalClose}>
        {modalName === loginModalName && <LoginModal />}
        {modalName === signUpModalName && <SignUpModal />}
      </IonModal>
    </Fragment>
  );
};

export const modalNames = { loginModalName, signUpModalName };
export default Modal;
