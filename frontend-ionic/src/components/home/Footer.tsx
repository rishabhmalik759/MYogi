import { IonIcon, IonButton, IonItem, IonInput, IonImg } from '@ionic/react';
import React, { useState } from 'react';
import {
  logoYoutube,
  logoInstagram,
  logoFacebook,
  logoTwitter,
  logoLinkedin,
} from 'ionicons/icons';

const Footer: React.FC = () => {
  const [text, setText] = useState<string>();

  return (
    <div className="footer">
      <div className="row col-md-9 mt-3">
        <div className="col-md-4 mt-3">
          <IonImg
            className="logo"
            alt="MYogi Logo"
            src="/assets/images/logoWhite.png"
          ></IonImg>
          <div className="row mt-2">
            <div className="col text-light">
              <IonButton color="light">
                <IonIcon className="span-blue" icon={logoInstagram}></IonIcon>
              </IonButton>
            </div>
            <div className="col text-light">
              <IonButton color="light">
                <IonIcon className="span-blue" icon={logoFacebook}></IonIcon>
              </IonButton>
            </div>
            <div className="col text-light">
              <IonButton color="light">
                <IonIcon className="span-blue" icon={logoLinkedin}></IonIcon>
              </IonButton>
            </div>
            <div className="col text-light">
              <IonButton color="light">
                <IonIcon className="span-blue" icon={logoYoutube}></IonIcon>
              </IonButton>
            </div>
            <div className="col text-light">
              <IonButton color="light">
                <IonIcon className="span-blue" icon={logoTwitter}></IonIcon>
              </IonButton>
            </div>
          </div>
          <p className="mt-3">
            Subscribe to be updated on our amazing offers & discounts
          </p>
          <div>
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
        <div className="col-md-4 mt-3">
          <h5>Important Links</h5>
          <p>About Us</p>
          <p>FAQ</p>
          <p>Contact Us</p>
          <p>Privacy Policy</p>
          <p>Terms of Use</p>
        </div>
      </div>
      <div className="col-md-12 mt-5 copyright">
        <p className="center  ">&copy; MYogi ABN: 012 982 390</p>
      </div>
    </div>
  );
};

export default Footer;
