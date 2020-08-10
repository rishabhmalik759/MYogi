import {
  IonCard,
  IonList,
  IonItem,
  IonText,
  IonImg,
  IonSlides,
  IonSlide,
  IonAvatar,
  IonCardContent,
} from '@ionic/react';
import React from 'react';

const Reviews: React.FC = () => {
  return (
    <div className="text-light ">
      <div className="col-md-6 mt-2 ">
        <h2 className="text-light mega-heading">
          <span className="span-green">Humble reviews</span> from our members
        </h2>
      </div>
      <div className="col-md-5 p-2 center ">
        <IonSlides
          pager={true}
          scrollbar={true}
          className="reviews-background reviews"
        >
          <IonSlide className="reviews">
            <IonCard className="slide border-light pb-4">
              <IonCardContent className="text-left">
                <IonList>
                  <IonItem>
                    <IonAvatar className="mb-5 mr-5">
                      <IonImg
                        className="review-img"
                        color="light"
                        src="https://via.placeholder.com/150"
                      ></IonImg>
                    </IonAvatar>
                    <IonText>
                      <h2 className="text-light margin-auto">
                        <span className="span-green">Mike Tyson</span>
                      </h2>
                      <p className="text-light">He is the god of boxing</p>
                    </IonText>
                  </IonItem>
                </IonList>
                <div className="pl-3">
                  <p>
                    Something we got to understand how to do and perform, MYogi
                    helped me to loose my pain
                  </p>
                </div>
              </IonCardContent>
            </IonCard>
          </IonSlide>
          <IonSlide className="reviews">
            <IonCard className="slide border-light pb-4">
              <IonCardContent className="text-left">
                <IonList>
                  <IonItem>
                    <IonAvatar className="mb-5 mr-5">
                      <IonImg
                        className="review-img"
                        color="light"
                        src="https://via.placeholder.com/150"
                      ></IonImg>
                    </IonAvatar>
                    <IonText>
                      <h2 className="text-light margin-auto">Mike Tyson</h2>
                      <p>He is the god of boxing</p>
                    </IonText>
                  </IonItem>
                </IonList>
                <div className="pl-3">
                  <p>
                    Something we got to understand how to do and perform, MYogi
                    helped me to loose my pain
                  </p>
                </div>
              </IonCardContent>
            </IonCard>
          </IonSlide>
          <IonSlide className="reviews">
            <IonCard className="slide border-light pb-4">
              <IonCardContent className="text-left">
                <IonList>
                  <IonItem>
                    <IonAvatar className="mb-5 mr-5">
                      <IonImg
                        className="review-img"
                        color="light"
                        src="https://via.placeholder.com/150"
                      ></IonImg>
                    </IonAvatar>
                    <IonText>
                      <h2 className="text-light margin-auto">Mike Tyson</h2>
                      <p>He is the god of boxing</p>
                    </IonText>
                  </IonItem>
                </IonList>
                <div className="pl-3">
                  <p>
                    Something we got to understand how to do and perform, MYogi
                    helped me to loose my pain
                  </p>
                </div>
              </IonCardContent>
            </IonCard>
          </IonSlide>
          <IonSlide className="reviews">
            <IonCard className="slide border-light pb-4">
              <IonCardContent className="text-left">
                <IonList>
                  <IonItem>
                    <IonAvatar className="mb-5 mr-5">
                      <IonImg
                        className="review-img"
                        color="light"
                        src="https://via.placeholder.com/150"
                      ></IonImg>
                    </IonAvatar>
                    <IonText>
                      <h2 className="text-light margin-auto">Mike Tyson</h2>
                      <p>He is the god of boxing</p>
                    </IonText>
                  </IonItem>
                </IonList>
                <div className="pl-3">
                  <p>
                    Something we got to understand how to do and perform, MYogi
                    helped me to loose my pain
                  </p>
                </div>
              </IonCardContent>
            </IonCard>
          </IonSlide>
        </IonSlides>
      </div>
    </div>
  );
};
export default Reviews;
