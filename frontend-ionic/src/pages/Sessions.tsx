import {
  IonButtons,
  IonContent,
  IonHeader,
  IonMenuButton,
  IonPage,
  IonTitle,
  IonToolbar,
} from '@ionic/react';

import React from 'react';
import ExploreContainer from '../components/shared/ExploreContainer';
import './Page.scss';
import DashboardTopBar from '../components/shared/DashboardTopBar';

const Page: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <DashboardTopBar />
        <IonToolbar className="background-grey ">
          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
          <IonTitle>Sessions New</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Sessions New</IonTitle>
          </IonToolbar>
        </IonHeader>
        <ExploreContainer name="Sessions" />
      </IonContent>
    </IonPage>
  );
};

export default Page;
