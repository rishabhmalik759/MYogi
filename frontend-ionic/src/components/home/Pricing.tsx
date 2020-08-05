import {
  IonButton,
  IonLabel,
  IonCard,
  IonSegment,
  IonSegmentButton,
  IonCardHeader,
} from '@ionic/react';
import React, { useState } from 'react';

const Pricing: React.FC = () => {
  const [selectedTabSingle, setSelectedTabSingle] = useState<any>('weekly');

  return (
    <div className="text-light">
      <div className="col-md-6 mt-2 mb-2">
        <h2 className="text-light mega-heading">
          <span className="span-purple">Choose a membership option</span> from
          our simple pricing
        </h2>
        <div className="note">
          *Discounted price available, limited time offers.
        </div>
      </div>
      <div className="row center">
        <div className="col-md-3">
          <h3 className="pt-3 pb-0 pl-3 m-0 text-left">Single Membership</h3>
          <IonCard className="p-0 border-light">
            <div className="background-light">
              <IonSegment
                color="tertiary"
                value={selectedTabSingle}
                onIonChange={(e) => setSelectedTabSingle(e.detail.value)}
              >
                <IonSegmentButton value="weekly">
                  <IonLabel>
                    <b>Weekly</b>
                  </IonLabel>
                </IonSegmentButton>
                <IonSegmentButton value="half-yearly">
                  <IonLabel>
                    <b>Half Yearly</b>
                  </IonLabel>
                </IonSegmentButton>
                <IonSegmentButton value="yearly">
                  <IonLabel>
                    <b>Yearly</b>
                  </IonLabel>
                </IonSegmentButton>
              </IonSegment>
            </div>
            {selectedTabSingle === 'weekly' && (
              <IonCardHeader
                className="text-light"
                style={{ textAlign: 'center' }}
              >
                <h3 className="text-grey mb-3">
                  You pay{' '}
                  <b className="text-light">
                    30$ <s>70$</s>
                  </b>{' '}
                  / Week
                </h3>
                <p className="m-0 p-1"> Total Payment: 30$ / weekly</p>
                <p className="m-0 p-1 mb-3"> Total Savings: 40$ / week</p>
                <IonButton color="tertiary">Join with weekly plan</IonButton>
              </IonCardHeader>
            )}
            {selectedTabSingle === 'half-yearly' && (
              <IonCardHeader
                className="text-light"
                style={{ textAlign: 'center' }}
              >
                <h3 className="text-grey mb-3">
                  You pay{' '}
                  <b className="text-light">
                    23$ <s>59$</s>
                  </b>{' '}
                  / Week
                </h3>
                {/* 1428 - 552 =  */}
                <p className="m-0 p-1"> Total Payment: 570$ in 6 months</p>
                <p className="m-0 p-1 mb-3"> Total Savings: 876$ in 6 months</p>
                <IonButton color="tertiary">Join with 6 month plan</IonButton>
              </IonCardHeader>
            )}
            {selectedTabSingle === 'yearly' && (
              <IonCardHeader
                className="text-light"
                style={{ textAlign: 'center' }}
              >
                <h3 className="text-grey mb-3">
                  You pay{' '}
                  <b className="text-light">
                    20$ <s>50$</s>
                  </b>{' '}
                  / Week
                </h3>
                <p className="m-0 p-1"> Total Payment: 960$ in 12 months</p>
                <p className="m-0 p-1 mb-3">
                  {' '}
                  Total Savings: 1440$ in 12 months
                </p>
                <IonButton color="tertiary">Join with 12 month plan</IonButton>
              </IonCardHeader>
            )}
            <div className="note text-light p-2">
              *Choose this option if you are joining alone.
            </div>
          </IonCard>
        </div>
        <div className="col-md-3">
          <h3 className="pt-3 pb-0 pl-3 m-0 text-left">Partner Membership</h3>
          <IonCard className="p-0 border-light">
            <div className="background-light">
              <IonSegment value="all" color="tertiary">
                <IonSegmentButton value="weekly">
                  <IonLabel>
                    <b>Weekly</b>
                  </IonLabel>
                </IonSegmentButton>
                <IonSegmentButton value="half-yearly">
                  <IonLabel>
                    <b>Half Yearly</b>
                  </IonLabel>
                </IonSegmentButton>
                <IonSegmentButton value="yearly">
                  <IonLabel>
                    <b>Yearly</b>
                  </IonLabel>
                </IonSegmentButton>
              </IonSegment>
            </div>
            <IonCardHeader
              className="text-light"
              style={{ textAlign: 'center' }}
            >
              <h3 className="text-grey">
                You pay{' '}
                <b className="text-light">
                  30$ <s>70$</s>
                </b>{' '}
                / Week
              </h3>
            </IonCardHeader>
          </IonCard>
        </div>
        <div className="col-md-3">
          <h3 className="pt-3 pb-0 pl-3 m-0 text-left">Group Membership</h3>
          <IonCard className="p-0 border-light">
            <div className="background-light">
              <IonSegment value="all" color="tertiary">
                <IonSegmentButton value="weekly">
                  <IonLabel>
                    <b>Weekly</b>
                  </IonLabel>
                </IonSegmentButton>
                <IonSegmentButton value="half-yearly">
                  <IonLabel>
                    <b>Half Yearly</b>
                  </IonLabel>
                </IonSegmentButton>
                <IonSegmentButton value="yearly">
                  <IonLabel>
                    <b>Yearly</b>
                  </IonLabel>
                </IonSegmentButton>
              </IonSegment>
            </div>
            <IonCardHeader
              className="text-light"
              style={{ textAlign: 'center' }}
            >
              <h3 className="text-grey">
                You pay{' '}
                <b className="text-light">
                  30$ <s>70$</s>
                </b>{' '}
                / Week
              </h3>
            </IonCardHeader>
          </IonCard>
        </div>
        <div className="col-md-3">
          <h3 className="pt-3 pb-0 pl-3 m-0 text-left">
            Goal Based <span className=" span-purple heading">Dietitian</span>
          </h3>
          <IonCard className="p-0 border-light">
            <div className="background-light">
              <IonSegment value="all" color="tertiary">
                <IonSegmentButton value="weekly">
                  <IonLabel>
                    <b>Weekly</b>
                  </IonLabel>
                </IonSegmentButton>
                <IonSegmentButton value="half-yearly">
                  <IonLabel>
                    <b>Half Yearly</b>
                  </IonLabel>
                </IonSegmentButton>
                <IonSegmentButton value="yearly">
                  <IonLabel>
                    <b>Yearly</b>
                  </IonLabel>
                </IonSegmentButton>
              </IonSegment>
            </div>
            <IonCardHeader
              className="text-light"
              style={{ textAlign: 'center' }}
            >
              <h3 className="text-grey">
                You pay{' '}
                <b className="text-light">
                  30$ <s>70$</s>/ Week
                </b>{' '}
              </h3>
            </IonCardHeader>
          </IonCard>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
