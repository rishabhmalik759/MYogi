import {
  IonButtons,
  IonContent,
  IonHeader,
  IonMenuButton,
  IonPage,
  IonTitle,
  IonToolbar,
} from '@ionic/react';
import DashboardTopBar from '../components/shared/DashboardTopBar';

import React from 'react';
import ExploreContainer from '../components/shared/ExploreContainer';
import './Page.scss';

const Page: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <DashboardTopBar />
        <IonToolbar className="background-grey ">
          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
          <IonTitle>Packs New</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Packs New</IonTitle>
          </IonToolbar>
        </IonHeader>
        <ExploreContainer name="Packs" />
      </IonContent>
    </IonPage>
  );
};

export default Page;
