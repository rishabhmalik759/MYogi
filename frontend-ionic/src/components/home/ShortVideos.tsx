//issues
//issue on desktop not showing properly

import {
  IonButton,
  IonCard,
  IonCardHeader,
  IonSlides,
  IonSlide,
  IonCardContent,
} from '@ionic/react';
import React, { Dispatch } from 'react';
import { useDispatch } from 'react-redux';
import { IModalActions, showModal } from '../../store/actions/modalActions';
import { modalNames } from '../modal/Modal';
import { useWindowSize } from '../shared/UseWindowSize';

const ShortVideos: React.FC = () => {
  const modalDispatch = useDispatch<Dispatch<IModalActions>>();

  function handleModalOpen(name: string) {
    modalDispatch(showModal(name));
  }
  const [width] = useWindowSize();
  const options = {
    slidesPerView: 4,
    updateOnWindowResize: true,
  };
  const options2 = {
    slidesPerView: 1,
    updateOnWindowResize: true,
  };
  return (
    <div className="text-light mb-5 mt-3">
      <div className="col-md-6 mt-2 mb-2">
        <h2 className="text-light mega-heading">
          <span className="span-pink">Make yoga a part of your life,</span>{' '}
          short videos focused on major issues
        </h2>
      </div>
      <IonSlides
        options={width > 700 ? options : options2}
        scrollbar={true}
        pager={true}
        className="short-videos"
      >
        <IonSlide>
          <IonCard>
            <IonCardHeader>
              <div>
                <img alt="temp" src="https://via.placeholder.com/350x150"></img>
              </div>
            </IonCardHeader>
            <IonCardContent>
              <h2 className="text-light text-left">
                Simple Yoga sequences to increase flexibility and endurance
              </h2>
            </IonCardContent>
          </IonCard>
        </IonSlide>
        <IonSlide>
          <IonCard>
            <IonCardHeader>
              <img alt="temp" src="https://via.placeholder.com/350x150"></img>
            </IonCardHeader>
            <IonCardContent>
              <h2 className="text-light text-left">
                5 Morning Pranayam to boost energy throughout the day
              </h2>
            </IonCardContent>
          </IonCard>
        </IonSlide>
        <IonSlide>
          <IonCard>
            <IonCardHeader>
              <img alt="temp" src="https://via.placeholder.com/350x150"></img>
            </IonCardHeader>
            <IonCardContent>
              <h2 className="text-light text-left">
                Increase your sex drive through this simple yoga sequences
              </h2>
            </IonCardContent>
          </IonCard>
        </IonSlide>
        <IonSlide>
          <IonCard>
            <IonCardHeader>
              <img alt="temp" src="https://via.placeholder.com/350x150"></img>
            </IonCardHeader>
            <IonCardContent>
              <h2 className="text-light text-left">
                Surya Namashkar for slip disk recovery
              </h2>
            </IonCardContent>
          </IonCard>
        </IonSlide>
        <IonSlide>
          <IonCard>
            <IonCardHeader>
              <img alt="temp" src="https://via.placeholder.com/350x150"></img>
            </IonCardHeader>
            <IonCardContent>
              <h2 className="text-light text-left">
                Slip disk recovery through simple yoga sequences
              </h2>
            </IonCardContent>
          </IonCard>
        </IonSlide>
        <IonSlide>
          <IonCard>
            <IonCardHeader>
              <img alt="temp" src="https://via.placeholder.com/350x150"></img>
            </IonCardHeader>
            <IonCardContent>
              <h2 className="text-light text-left">
                Top 5 sequences for heart, liver and diabetes{' '}
              </h2>
            </IonCardContent>
          </IonCard>
        </IonSlide>
        <IonSlide>
          <IonCard>
            <IonCardHeader>
              <img
                alt="temp"
                width="350"
                src="https://via.placeholder.com/350x150"
              ></img>
            </IonCardHeader>
            <IonCardContent>
              <h2 className="text-light text-left">
                How to breath for a longer life
              </h2>
            </IonCardContent>
          </IonCard>
        </IonSlide>
        <IonSlide>
          <IonCard>
            <IonCardHeader>
              <img alt="temp" src="https://via.placeholder.com/350x150"></img>
            </IonCardHeader>
            <IonCardContent>
              <h2 className="text-light text-left">
                Top 10 mistakes to keep in mind while performing yoga
              </h2>
            </IonCardContent>
          </IonCard>
        </IonSlide>
      </IonSlides>
      <div className="center">
        <IonButton
          onClick={() => handleModalOpen(modalNames.loginModalName)}
          color="pink"
        >
          Sign in now to watch more
        </IonButton>
      </div>
    </div>
  );
};

export default ShortVideos;
