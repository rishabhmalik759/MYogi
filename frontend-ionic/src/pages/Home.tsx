import { IonContent, IonPage } from '@ionic/react';
import React from 'react';
import './Home.scss';

//Components
import Pricing from '../components/home/Pricing';
import Community from '../components/home/Community';
import Transformation from '../components/home/Transformation';
import HomeHeader from '../components/home/HomeHeader';
import HeaderStrip from '../components/home/HeaderStrip';

const Home: React.FC = () => {
  return (
    <IonPage>
      <IonContent>
        <HomeHeader></HomeHeader>
        <HeaderStrip></HeaderStrip>
        <Transformation></Transformation>
        <Community></Community>
        <Pricing></Pricing>
        <div className="footer"></div>
      </IonContent>
    </IonPage>
  );
};

export default Home;
