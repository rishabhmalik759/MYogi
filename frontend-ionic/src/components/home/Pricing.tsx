import {
  IonButton,
  IonLabel,
  IonCard,
  IonSegment,
  IonSegmentButton,
  IonCardHeader,
  IonList,
  IonItem,
  IonText,
  IonImg,
} from '@ionic/react';
import React, { useState } from 'react';
import { motion } from 'framer-motion';

const Pricing: React.FC = () => {
  const [selectedTabSingle, setSelectedTabSingle] = useState<any>('Week');
  const [selectedTabPartner, setSelectedTabPartner] = useState<any>('Week');
  const membershipFeatures: JSX.Element = (
    <div className="p-3" style={{ borderTop: '1px solid #f9f9f9' }}>
      <h5 className="text-light underline-purple">Membership Includes</h5>
      <IonList>
        <IonItem className="mt-2">
          <IonImg
            className="custom-icon"
            color="light"
            src="/assets/icon/live-streaming.svg"
          ></IonImg>
          <IonText>
            <p className="text-light p-2 margin-auto">Live Sessions</p>
          </IonText>
        </IonItem>
        <IonItem className="mt-2">
          <IonImg
            className="custom-icon"
            color="light"
            src="/assets/icon/group.svg"
          ></IonImg>
          <IonText>
            <p className="text-light p-2 margin-auto">
              Maximum 13 members in a group
            </p>
          </IonText>
        </IonItem>
        <IonItem className="mt-2">
          <IonImg
            className="custom-icon"
            color="light"
            src="/assets/icon/microphone.svg"
          ></IonImg>
          <IonText>
            <p className="text-light p-2 margin-auto">
              Last 7 sessions recorded
            </p>
          </IonText>
        </IonItem>
        <IonItem className="mt-2">
          <IonImg
            className="custom-icon"
            color="light"
            src="/assets/icon/speak.svg"
          ></IonImg>
          <IonText>
            <p className="text-light p-2 margin-auto">
              Regular interactions with your trainer
            </p>
          </IonText>
        </IonItem>
        <IonItem className="mt-2">
          <IonImg
            className="custom-icon"
            color="light"
            src="/assets/icon/world.svg"
          ></IonImg>
          <IonText>
            <p className="text-light p-2 margin-auto">
              Access to our global community
            </p>
          </IonText>
        </IonItem>
        <IonItem className="mt-2">
          <IonImg
            className="custom-icon"
            color="light"
            src="/assets/icon/routine.svg"
          ></IonImg>
          <IonText>
            <p className="text-light p-2 margin-auto">
              Routine tailored to your needs and goals
            </p>
          </IonText>
        </IonItem>
      </IonList>
    </div>
  );

  return (
    <div className="text-light mb-5">
      <div className="col-md-6 mt-2 mb-2">
        <h2 className="text-light mega-heading">
          <span className="span-purple">Choose a membership option</span> from
          our simple pricing
        </h2>
        <div className="note">
          *Discounted prices available, limited time offers.
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
                <IonSegmentButton value="Week">
                  <IonLabel>
                    <b>Week</b>
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
            {selectedTabSingle === 'Week' && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
              >
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
                  <p className="m-0 p-1"> Total Payment: 30$ / Week</p>
                  <p className="m-0 p-1 mb-3"> Total Savings: 40$ / Week</p>
                  <IonButton color="tertiary">Join with Week plan</IonButton>
                </IonCardHeader>
              </motion.div>
            )}
            {selectedTabSingle === 'half-yearly' && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
              >
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
                  <p className="m-0 p-1"> Total Payment: 552$ in 6 months</p>
                  <p className="m-0 p-1 mb-3">
                    {' '}
                    Total Savings: 864$ in 6 months
                  </p>
                  <IonButton color="tertiary">Join with 6 month plan</IonButton>
                </IonCardHeader>
              </motion.div>
            )}
            {selectedTabSingle === 'yearly' && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
              >
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
                  <IonButton color="tertiary">
                    Join with 12 month plan
                  </IonButton>
                </IonCardHeader>
              </motion.div>
            )}
            <div className="note text-light p-2">
              *Choose this option if joining alone.
            </div>
            {membershipFeatures}
          </IonCard>
        </div>
        <div className="col-md-3">
          <h3 className="pt-3 pb-0 pl-3 m-0 text-left">Group Membership</h3>
          <IonCard className="p-0 border-light">
            <div className="background-light">
              <IonSegment
                color="tertiary"
                value={selectedTabPartner}
                onIonChange={(e) => setSelectedTabPartner(e.detail.value)}
              >
                <IonSegmentButton value="Week">
                  <IonLabel>
                    <b>Week</b>
                  </IonLabel>
                </IonSegmentButton>
                <IonSegmentButton value="half-yearly">
                  <IonLabel>
                    <b>Half Yearly</b>
                  </IonLabel>
                </IonSegmentButton>
              </IonSegment>
            </div>
            {selectedTabPartner === 'Week' && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
              >
                <IonCardHeader
                  className="text-light"
                  style={{ textAlign: 'center' }}
                >
                  <h3 className="text-grey mb-3">
                    You pay{' '}
                    <b className="text-light">
                      25$ <s>60$</s>
                    </b>{' '}
                    / Week / Person
                  </h3>
                  <p className="m-0 p-1"> Total Payment: 25$ / Week / Person</p>
                  <p className="m-0 p-1 mb-3">
                    {' '}
                    Total Savings: 35$ / Week / Person
                  </p>
                  <IonButton color="tertiary">Join with Week plan</IonButton>
                </IonCardHeader>
              </motion.div>
            )}
            {selectedTabPartner === 'half-yearly' && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
              >
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
                  {/* 1428 - 552 =  */}
                  <p className="m-0 p-1">
                    {' '}
                    Total Payment: 480$ in 6 months/ Person
                  </p>
                  <p className="m-0 p-1 mb-3">
                    {' '}
                    Total Savings: 720$ in 6 months / Person
                  </p>
                  <IonButton color="tertiary">Join with 6 month plan</IonButton>
                </IonCardHeader>
              </motion.div>
            )}

            <div className="note text-light p-2">
              *Choose this option if joining with a group of 2 or more.
            </div>
            {membershipFeatures}
          </IonCard>
        </div>
        <div className="col-md-3">
          <h3 className="pt-3 pb-0 pl-3 m-0 text-left">
            One-on-One Membership
          </h3>
          <IonCard className="p-0 border-light">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1 }}
            >
              <IonCardHeader
                className="text-light mt-5"
                style={{ textAlign: 'center' }}
              >
                <h3 className="text-grey mb-3">
                  You pay{' '}
                  <b className="text-light">
                    30$ <s>50$</s>
                  </b>{' '}
                  / Session
                </h3>
                <p className="m-0 p-1"> Total Payment: 30$ / Session</p>
                <p className="m-0 p-1 mb-3"> Total Savings: 20$ / Session</p>
                <IonButton color="tertiary">
                  Join with One-on-One plan
                </IonButton>
              </IonCardHeader>
            </motion.div>
            <div className="note text-light p-2">
              *Choose this option for One-on-One Live Sessions.
            </div>
            <div className="p-3" style={{ borderTop: '1px solid #f9f9f9' }}>
              <h5 className="text-light underline-purple">
                Membership Includes
              </h5>
              <IonList>
                <IonItem className="mt-2">
                  <IonImg
                    className="custom-icon"
                    color="light"
                    src="/assets/icon/live-streaming.svg"
                  ></IonImg>
                  <IonText>
                    <p className="text-light p-2 margin-auto">
                      Live Sessions (One-on-One)
                    </p>
                  </IonText>
                </IonItem>
                <IonItem className="mt-2">
                  <IonImg
                    className="custom-icon"
                    color="light"
                    src="/assets/icon/microphone.svg"
                  ></IonImg>
                  <IonText>
                    <p className="text-light p-2 margin-auto">
                      Last 7 sessions recorded
                    </p>
                  </IonText>
                </IonItem>
                <IonItem className="mt-2">
                  <IonImg
                    className="custom-icon"
                    color="light"
                    src="/assets/icon/world.svg"
                  ></IonImg>
                  <IonText>
                    <p className="text-light p-2 margin-auto">
                      Access to our global community
                    </p>
                  </IonText>
                </IonItem>
                <IonItem className="mt-2">
                  <IonImg
                    className="custom-icon"
                    color="light"
                    src="/assets/icon/routine.svg"
                  ></IonImg>
                  <IonText>
                    <p className="text-light p-2 margin-auto">
                      Routine tailored to your needs and goals
                    </p>
                  </IonText>
                </IonItem>

                <IonText className="m-2 mt-3">
                  <p className="text-light text-left margin-auto mb-3">
                    <span className="underline-purple">
                      Specialized instructors available for Posture Correction,
                      Injury Recovery, Flexibility Improvement and much more
                    </span>
                  </p>
                </IonText>
              </IonList>
            </div>
          </IonCard>
        </div>
        <div className="col-md-3">
          <h3 className="pt-3 pb-0 pl-3 m-0 text-left">
            Goal Based <span className=" span-purple heading">Dietitian</span>
          </h3>
          <IonCard className="p-0 border-light">
            <IonCardHeader
              className="text-light"
              style={{ textAlign: 'center' }}
            >
              <h3 className="text-grey">
                You pay{' '}
                <b className="text-light">
                  10$ <s>20$</s>
                </b>{' '}
                / Week
              </h3>
            </IonCardHeader>
          </IonCard>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
