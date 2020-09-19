import React, { Fragment, Dispatch } from 'react';

import {
  IonContent,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonButtons,
  IonButton,
  IonIcon,
} from '@ionic/react';
import {
  closeCircle,
  logoFacebook,
  logoGoogle,
  logoLinkedin,
  logoTwitter,
} from 'ionicons/icons';
import { useDispatch } from 'react-redux';
import { IModalActions, hideModal } from '../../../store/actions/modalActions';
import * as types from '../../../store/types';
import { IAuthActions } from '../../../store/actions/signInActions';

//name of modal
export const loginModalName = 'LOGIN_MODAL';

const LoginModal: React.FC = () => {
  const modalDispatch = useDispatch<Dispatch<IModalActions>>();
  const authDispatch = useDispatch<Dispatch<IAuthActions>>();

  const handleModalClose = () => {
    modalDispatch(hideModal());
  };

  return (
    <Fragment>
      <IonHeader color="dark">
        <IonToolbar className="dark-background">
          <IonTitle color="light">Login</IonTitle>
          <IonButtons slot="end">
            <IonButton color="primary" onClick={handleModalClose}>
              <IonIcon icon={closeCircle} size="large"></IonIcon>
            </IonButton>
          </IonButtons>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen className="login-form middle">
        <div className="p-3 login-form">
          <div className="text-light center ">
            <p>Sign in with your preferred platform</p>
          </div>
          <div className="col-md-8 center-login center p-2">
            <IonButton
              onClick={() => authDispatch({ type: types.GOOGLE_SIGN_IN })}
              class="m-2"
            >
              <IonIcon icon={logoGoogle} />
            </IonButton>
            <IonButton class="m-2">
              <IonIcon icon={logoFacebook} />
            </IonButton>
            <IonButton class="m-2">
              <IonIcon icon={logoTwitter} />
            </IonButton>
            <IonButton class="m-2">
              <IonIcon icon={logoLinkedin} />
            </IonButton>
          </div>
        </div>
        <div className="center"></div>
        <div className="mt-3 center">
          <img
            className="logo"
            alt="MYogi Logo"
            src="/assets/images/logoWhite.png"
          ></img>
          <p className="center mb-3">Get fit at home through Yoga</p>
        </div>
      </IonContent>
    </Fragment>
  );
};

export default LoginModal;
