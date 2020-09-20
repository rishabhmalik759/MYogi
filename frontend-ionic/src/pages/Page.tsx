import {
  IonButton,
  IonButtons,
  IonContent,
  IonHeader,
  IonIcon,
  IonMenuButton,
  IonPage,
  IonTitle,
  IonToolbar,
} from '@ionic/react';
import { logOut } from 'ionicons/icons';

import React, { Dispatch } from 'react';
import { useParams } from 'react-router';
import ExploreContainer from '../components/shared/ExploreContainer';
import './Page.scss';
import { useDispatch } from 'react-redux';
import { IUserActions, logoutUser } from '../store/actions/userActions';

const Page: React.FC = () => {
  const { name } = useParams<{ name: string }>();
  const userDispatch = useDispatch<Dispatch<IUserActions>>();

  const _handleLogOut = () => {
    return userDispatch(logoutUser());
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar className="dark-background">
          <IonButton
            onClick={_handleLogOut}
            color="danger"
            slot="end"
            className="m-2"
          >
            <IonIcon icon={logOut} style={{ color: 'white' }}></IonIcon>
          </IonButton>

          <IonTitle className="text-light">MYOGI</IonTitle>
        </IonToolbar>
        <IonToolbar>
          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
          <IonTitle>{name}</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">{name}</IonTitle>
          </IonToolbar>
        </IonHeader>
        <ExploreContainer name={name} />
      </IonContent>
    </IonPage>
  );
};

export default Page;
