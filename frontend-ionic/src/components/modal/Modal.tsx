import React, { Fragment } from 'react';

import { IonModal } from '@ionic/react';

import { useModalContext } from '../../store/contexts/ModalContext';
import { setModal } from '../../store/actions';
import LoginModal, { loginModalName } from './auth/LoginModal';
import SignUpModal, { signUpModalName } from './auth/SignUpModal';

const Modal: React.FC = () => {
  const { state, dispatch } = useModalContext();
  const { modalActive, name } = state;

  const handleModalClose = () => {
    dispatch(setModal({ modalActive: false, name: '' }));
  };

  return (
    <Fragment>
      <IonModal isOpen={modalActive} onDidDismiss={handleModalClose}>
        {name === loginModalName && <LoginModal />}
        {name === signUpModalName && <SignUpModal />}
      </IonModal>
    </Fragment>
  );
};

export const modalNames = { loginModalName, signUpModalName };
export default Modal;
