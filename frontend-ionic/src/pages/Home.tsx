import { IonContent, IonPage } from '@ionic/react';
import React from 'react';
import './Home.scss';

//Components
import Pricing from '../components/home/Pricing';
import Community from '../components/home/Community';
import Transformation from '../components/home/Transformation';
import HomeHeader from '../components/home/HomeHeader';
import HeaderStrip from '../components/home/HeaderStrip';
import Reviews from '../components/home/Reviews';
import ShortVideos from '../components/home/ShortVideos';
import Footer from '../components/home/Footer';

const Home: React.FC = () => {
  return (
    <IonPage>
      <IonContent>
        <HomeHeader></HomeHeader>
        <HeaderStrip></HeaderStrip>
        <Transformation></Transformation>
        <Community></Community>
        <Pricing></Pricing>
        <Reviews></Reviews>
        <ShortVideos></ShortVideos>
        <Footer></Footer>
      </IonContent>
    </IonPage>
  );
};

export default Home;
