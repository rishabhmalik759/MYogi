import { IonIcon, IonButton, IonItem, IonCard, IonInput } from '@ionic/react';
import React, { useState } from 'react';
import {
  logoYoutube,
  logoInstagram,
  logoFacebook,
  logoTwitter,
  logoLinkedin,
} from 'ionicons/icons';

const Community: React.FC = () => {
  const [text, setText] = useState<string>();

  return (
    <div className="mb-5">
      <div className="col-md-6 mt-2 mb-2">
        <h2 className="text-light mega-heading">
          <span className="span-blue">Join our Global Community</span> of Yoga
          Practitioners
        </h2>
      </div>
      <IonCard className="p-0 background-light border-light">
        <div
          className="row col-md-12"
          style={{ margin: '0 0 0 0', padding: '0 0 0 0' }}
        >
          <div
            className="col-md-6 center p-4 background-dark"
            style={{ margin: ' auto' }}
          >
            <img
              className="image-width"
              src="/assets/images/earth.png"
              alt="MYOGI Community"
            ></img>
          </div>
          <div className="col-md-6">
            <div className="p-2 mt-4">
              <h5 className="text-dark">
                MYOGI is a community of healthy and fit people. Our mission is
                to spread healthy living all over the globe.
              </h5>
              <h5 className="underline-blue mt-3 text-dark">
                Our community boosts:
              </h5>
              <div className="row center">
                <div className="col-md-6 text-left">
                  <h5 className="text-dark">Growth</h5>
                  <p className="text-dark">
                    A community helps you grow as a person and a yogi. A
                    community makes the process fun and exciting, helping you to
                    achieve your goals with passion.
                  </p>
                </div>
                <div className="col-md-6 text-left">
                  <h5 className="text-dark">Connections</h5>
                  <p className="text-dark">
                    A community boosts connections and help you make friends
                    while you perform yoga. Connections in our community help
                    you focus on what's important and make you realize that you
                    are not alone.
                  </p>
                </div>
              </div>
              <div className="row center">
                <div className="col-md-6 text-left">
                  <h5 className="text-dark">Unite</h5>
                  <p className="text-dark">
                    Being a part of our community will give you a feeling of
                    belonging. It's a place where you make friends achieve
                    goals, stay fit and live a healthy life.
                  </p>
                </div>
                <div className="col-md-6 text-left">
                  <h5 className="text-dark">Motivate</h5>
                  <p className="text-dark">
                    Being motivated to be fit or to follow a routine regularly
                    can be a challenging task. Our community support and
                    motivate you to follow the path of a healthy life, once you
                    get there, you can motivate others and change lives on the
                    way.
                  </p>
                </div>
              </div>
            </div>
            <div className="pb-4">
              <h5 className="text-dark pl-3">Follow us on</h5>
              <div className="row center col-md-6 mb-4">
                <div className="col text-dark">
                  <IonButton color="light">
                    <IonIcon
                      className="span-blue"
                      icon={logoInstagram}
                    ></IonIcon>
                  </IonButton>
                </div>
                <div className="col text-dark">
                  <IonButton color="light">
                    <IonIcon
                      className="span-blue"
                      icon={logoFacebook}
                    ></IonIcon>
                  </IonButton>
                </div>
                <div className="col text-dark">
                  <IonButton color="light">
                    <IonIcon
                      className="span-blue"
                      icon={logoLinkedin}
                    ></IonIcon>
                  </IonButton>
                </div>
                <div className="col text-dark">
                  <IonButton color="light">
                    <IonIcon className="span-blue" icon={logoYoutube}></IonIcon>
                  </IonButton>
                </div>
                <div className="col text-dark">
                  <IonButton color="light">
                    <IonIcon className="span-blue" icon={logoTwitter}></IonIcon>
                  </IonButton>
                </div>
              </div>
              <h5 className="text-dark pl-3">
                Subscribe to be updated on amazing offers, news and discounts
              </h5>
              <div className="col-md-6">
                <IonItem className="background-light" color="light">
                  <IonInput
                    color="dark"
                    value={text}
                    placeholder="Enter Your Email"
                    onIonChange={(e) => setText(e.detail.value!)}
                  ></IonInput>
                  <IonButton>Subscribe</IonButton>
                </IonItem>
              </div>
            </div>
          </div>
        </div>
      </IonCard>
    </div>
  );
};

export default Community;
