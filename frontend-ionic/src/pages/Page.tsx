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
import { exitOutline, logOut, logOutOutline } from 'ionicons/icons';

import React from 'react';
import { useParams } from 'react-router';
import { modalNames } from '../components/modal/Modal';
import ExploreContainer from '../components/shared/ExploreContainer';
import './Page.scss';

const Page: React.FC = () => {
  const { name } = useParams<{ name: string }>();

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar className="dark-background">
          <IonButton color="danger" slot="end" className="m-2">
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
