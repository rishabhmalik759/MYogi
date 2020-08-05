import { IonIcon } from '@ionic/react';
import React from 'react';
import {
  videocamOutline,
  locateOutline,
  manOutline,
  heartCircleOutline,
} from 'ionicons/icons';

const HeaderStrip: React.FC = () => {
  return (
    <div
      className="row"
      style={{
        background: '#ede7f6',
      }}
    >
      <div
        className="col-lg-3 col-sm-6 dark-text p-2"
        style={{ textAlign: 'center' }}
      >
        <IonIcon size="large" icon={videocamOutline}></IonIcon>
        <h4>Live Sessions</h4>
      </div>
      <div
        className="col-lg-3 col-sm-6 dark-text p-2"
        style={{ textAlign: 'center' }}
      >
        <IonIcon size="large" icon={manOutline}></IonIcon>

        <h4>Certified Instructors</h4>
      </div>
      <div
        className="col-lg-3 col-sm-6 dark-text p-2"
        style={{ textAlign: 'center' }}
      >
        <IonIcon size="large" icon={locateOutline}></IonIcon>

        <h4>Goal Focused Diets</h4>
      </div>
      <div
        className="col-lg-3 col-sm-6 dark-text p-2"
        style={{ textAlign: 'center' }}
      >
        <IonIcon size="large" icon={heartCircleOutline}></IonIcon>

        <h4>14 Day Free Trial</h4>
      </div>
    </div>
  );
};

export default HeaderStrip;
