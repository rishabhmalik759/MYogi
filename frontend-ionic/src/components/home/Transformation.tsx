import {
  IonText,
  IonButton,
  IonList,
  IonItem,
  IonListHeader,
} from '@ionic/react';
import React from 'react';

const Transformation: React.FC = () => {
  return (
    <div className="row col-md-12 pt-5 pb-5" style={{ textAlign: 'center' }}>
      <div
        className="col-md-6"
        style={{ justifyContent: 'right', margin: 'auto' }}
      >
        <img
          className="back-img"
          src="/assets/images/servicesBackground.png"
          alt="MYOGI Services"
        ></img>
      </div>
      <div className="col-md-6 text-light" style={{ textAlign: 'left' }}>
        <h2 className="pt-3">
          We believe in <span className="span-yellow">transformations</span>
        </h2>
        <p>
          We use goal based approach to make your body and mind, healthy and
          sound.<br></br>
          We designed our platform with you in mind and we focus on all aspects
          of your body to help you achieve an overall fit and healthy physique.
        </p>
        <IonList>
          <IonListHeader className="light-text" style={{ fontSize: '1.3rem' }}>
            <u className="underline-yellow">
              Our sessions will help you achieve
            </u>
          </IonListHeader>
          <IonItem className="mt-2">
            <IonText>
              <h3 className="light-text">Muscle Toning</h3>
              <p className="grey-text text-2">
                Our live yoga sessions will contain posses which will help you
                achieve those toned up muscles. An instructor will always be
                watching so that you can understand and apply better.
              </p>
            </IonText>
          </IonItem>
          <IonItem className="mt-2">
            <IonText>
              <h3 className="light-text">A flexible body</h3>
              <p className="grey-text text-2">
                Yoga is proven to increase body flexibility. A flexible body
                will avail improved posture, greater strength, improved physical
                performance, a positive state of mind and much more.
              </p>
            </IonText>
          </IonItem>
          <IonItem className="mt-2">
            <IonText>
              <h3 className="light-text">Reduced Stress</h3>
              <p className="grey-text text-2">
                Yoga is proven to help you reduce stress and provide a mental
                well-being. Stress can be revealed in many ways, including back
                or neck pain, sleeping problems, drug abuse and inability to
                concentrate. Yoga can be really effective in developing coping
                skills and reaching a more positive outlook on life.
              </p>
            </IonText>
          </IonItem>
        </IonList>
        <IonButton className="mt-3" color="secondary">
          <b>Try 14 day free trial</b>
        </IonButton>
      </div>
    </div>
  );
};

export default Transformation;
