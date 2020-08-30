import React, { Fragment, useState } from 'react';

import {
  IonContent,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonButtons,
  IonButton,
  IonIcon,
  IonLabel,
  IonInput,
  IonImg,
} from '@ionic/react';
import { closeCircle } from 'ionicons/icons';

import { useModalContext } from '../../../store/contexts/ModalContext';
// import { AuthContext } from '../../../store/contexts/AuthContext';
import { setModal } from '../../../store/actions';
import { modalNames } from '../Modal';
// import firebase from 'firebase';
// import { useHistory } from 'react-router-dom';

export const loginModalName = 'LOGIN_MODAL';

const LoginModal: React.FC = () => {
  const { dispatch } = useModalContext();
  // const authContext = useContext(AuthContext);

  const handleModalClose = () => {
    dispatch(setModal({ modalActive: false, name: '' }));
  };
  const openSignUpModal = async () => {
    await handleModalClose;
    await dispatch(
      setModal({ modalActive: true, name: modalNames.signUpModalName })
    );
  };

  //form data
  const [loginData, setLoginData] = useState({
    emailLogin: '',
    passwordLogin: '',
  });
  const { emailLogin, passwordLogin } = loginData;

  const onChangeLogin = (e: any) => {
    setLoginData({ ...loginData, [e.target.name]: e.target.value });
    console.log(loginData);
  };
  //end form data

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
      <IonContent fullscreen className="login-form">
        <div className="p-3 login-form">
          <div className="col-md-8 center-login p-2">
            <IonLabel color="light">Enter your Email</IonLabel>
            <IonInput
              name="emailLogin"
              type="email"
              value={emailLogin}
              onIonChange={(e) => onChangeLogin(e)}
              placeholder="Email"
            />
          </div>
          <div className="col-md-8 center-login p-2">
            <IonLabel color="light">Enter your Password</IonLabel>
            <IonInput
              name="passwordLogin"
              value={passwordLogin}
              onIonChange={(e) => onChangeLogin(e)}
              placeholder="Password"
            />
          </div>
          <div className="col-md-8 center p-2">
            <IonButton color="primary">Login</IonButton>
          </div>
        </div>
        <div className="center">
          <div className="text-light">
            <p>Don't have an account?</p>
          </div>
          <div>
            <IonButton color="pink" onClick={openSignUpModal}>
              Sign Up Now
            </IonButton>
          </div>
        </div>
        <div className="mt-5">
          <IonImg
            className="logo"
            alt="MYogi Logo"
            src="/assets/images/logoWhite.png"
          ></IonImg>
          <p className="center mb-3">Get fit at home through Yoga</p>
        </div>
      </IonContent>
    </Fragment>
  );
};

export default LoginModal;
