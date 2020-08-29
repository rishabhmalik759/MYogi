import React, { Fragment, useState, useContext } from 'react';

//modals
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
import * as TActions from '../../../store/actions';
import { modalNames } from '../Modal';
import { useHistory } from 'react-router-dom';
import firebase from '../../../firebase';
import { useFirebaseAuthContext } from '../../../store/contexts/AuthContext';

export const signUpModalName = 'SIGNUP_MODAL';

const SignUpModal = (props: any) => {
  const { dispatch } = useModalContext();
  const firebaseDispatch = useFirebaseAuthContext().dispatch;

  // const authContext = useContext(AuthContext);

  const handleModalClose = () => {
    dispatch(TActions.setModal({ modalActive: false, name: '' }));
  };

  const openLoginModal = async () => {
    await handleModalClose;
    await dispatch(
      TActions.setModal({ modalActive: true, name: modalNames.loginModalName })
    );
  };
  //form data
  const [signUpData, setSignUpData] = useState({
    email: '',
    password: '',
    password2: '',
    name: '',
  });
  const { name, email, password, password2 } = signUpData;

  const onChange = (e: any) => {
    setSignUpData({ ...signUpData, [e.target.name]: e.target.value });
    // console.log(signUpData);
  };
  //end form data

  const history = useHistory();

  const handleSubmit = (event: any) => {
    event?.preventDefault();
    console.log(signUpData, 'values');
    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then((userCredential: firebase.auth.UserCredential) => {
        firebaseDispatch(TActions.authUser(userCredential));
        const db = firebase.firestore();
        db.collection('Users')
          .doc(userCredential.user!.uid)
          .set({
            email: email,
            name: name,
          })
          .then(() => {
            console.log('ok');
            history.push('/');
          })
          .catch((error) => {
            console.log(error.message);
            alert(error.message);
          });
      });
  };

  return (
    <Fragment>
      <IonHeader color="dark">
        <IonToolbar className="dark-background">
          <IonTitle color="light">SignUp</IonTitle>
          <IonButtons slot="end">
            <IonButton color="primary" onClick={handleModalClose}>
              <IonIcon icon={closeCircle} size="large"></IonIcon>
            </IonButton>
          </IonButtons>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <div className="p-3 login-form">
          <div className="col-md-8 center-login p-2">
            <IonLabel color="light">Enter your Name</IonLabel>
            <IonInput
              name="name"
              value={name}
              onIonChange={(e) => onChange(e)}
              placeholder="Name"
            />
          </div>
          <div className="col-md-8 center-login p-2">
            <IonLabel color="light">Enter your Email</IonLabel>
            <IonInput
              name="email"
              value={email}
              onIonChange={(e) => onChange(e)}
              placeholder="Email"
            />
          </div>
          <div className="col-md-8 center-login p-2">
            <IonLabel color="light">Enter your Password</IonLabel>
            <IonInput
              name="password"
              value={password}
              onIonChange={(e) => onChange(e)}
              placeholder="Password"
            />
          </div>
          <div className="col-md-8 center-login p-2">
            <IonLabel color="light">Re-enter your Password</IonLabel>
            <IonInput
              name="password2"
              value={password2}
              onIonChange={(e) => onChange(e)}
              placeholder="Re-Enter Password"
            />
          </div>
          <div className="col-md-8 center p-2">
            <IonButton color="primary" onClick={handleSubmit}>
              SignUp
            </IonButton>
          </div>
        </div>
        <div className="center">
          <div className="text-light">
            <p>Already have an account?</p>
          </div>
          <div>
            <IonButton color="pink" onClick={openLoginModal}>
              Sign-in Now
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

export default SignUpModal;
