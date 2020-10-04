import {
  IonBadge,
  IonButton,
  IonButtons,
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardTitle,
  IonChip,
  IonFab,
  IonFabButton,
  IonIcon,
  IonInput,
  IonItem,
  IonLabel,
  IonList,
  IonListHeader,
  IonPopover,
  IonText,
} from '@ionic/react';
import {
  caretDownCircleOutline,
  caretUpCircleOutline,
  pencil,
} from 'ionicons/icons';

import React, { Fragment, useState } from 'react';
import { useSelector } from 'react-redux';
import { AppState } from '../../store/reducers';

const PersonalInformation: React.FC = () => {
  const {
    name,
    avatar,
    email,
    weight,
    height,
    type,
    sex,
    age,
    bmi,
    level,
    country,
  } = useSelector((state: AppState) => state.userState);
  const [showPopover, setShowPopover] = useState<{
    open: boolean;
    event: Event | undefined;
  }>({
    open: false,
    event: undefined,
  });

  const [showCurrentDisorders, setShowCurrentDisorders] = useState(false);
  const [showWorkoutHistory, setShowWorkoutHistory] = useState(false);
  const [showDisordersHistory, setShowDisordersHistory] = useState(false);

  return (
    <Fragment>
      <div className="col-md-8 center">
        <IonCard className="p-0 background-light border-light">
          <div className="profile-background"> </div>
          <div className="card ml-4 profile-photo">
            <img src={avatar}></img>
          </div>

          <div className="edit-profile-button">
            <IonButtons slot="end">
              <IonFab vertical="bottom" horizontal="end" slot="fixed">
                <IonFabButton
                  size="small"
                  onClick={(e) =>
                    setShowPopover({ open: true, event: e.nativeEvent })
                  }
                >
                  <IonIcon size="small" icon={pencil} />
                </IonFabButton>
              </IonFab>{' '}
            </IonButtons>
          </div>
          <div className="left-align">
            <IonText>
              <h3>{name}</h3>
            </IonText>
            <IonText>
              <p>{level}</p>
            </IonText>
          </div>
          <IonCard className="p-0">
            <IonList className="profile-list p-0">
              <IonItem lines="inset">
                <IonLabel>BMI</IonLabel>
                <IonBadge color="primary">23</IonBadge>
              </IonItem>
              <IonItem lines="inset">
                <IonLabel>Age</IonLabel>
                <IonBadge color="primary">27</IonBadge>
              </IonItem>
              <IonItem lines="inset">
                <IonLabel>Height</IonLabel>
                <IonBadge color="primary">183 CM</IonBadge>
              </IonItem>
              <IonItem lines="inset">
                <IonLabel>Weight</IonLabel>
                <IonBadge color="primary">85 KG</IonBadge>
              </IonItem>
              <IonItem lines="inset">
                <IonLabel>Sex</IonLabel>
                <IonBadge color="primary">Male</IonBadge>
              </IonItem>
            </IonList>
          </IonCard>
          <div className="left-align mb-2 mt-4">
            <IonText>
              <p className="no-margin">Current Workout Overview</p>
            </IonText>
          </div>
          <IonCard className="mt-0">
            <IonList className="profile-list p-0">
              <IonItem lines="inset">
                <IonLabel>
                  <div>
                    <strong>Next class is on</strong>
                  </div>
                  <div> 10 am 23 October 2020</div>
                </IonLabel>
              </IonItem>
              <IonItem lines="inset">
                <IonLabel>
                  <div>
                    <strong>Alloted Time</strong>
                  </div>
                  <div className="row mb-4">
                    <div className="stick-left">10 am</div>

                    <IonFab vertical="bottom" horizontal="end" slot="fixed">
                      <IonFabButton size="small">
                        <IonIcon size="small" icon={pencil} />
                      </IonFabButton>
                    </IonFab>
                  </div>
                </IonLabel>
              </IonItem>
              <IonItem lines="inset">
                <IonLabel>
                  <strong>Workout Overview</strong>
                  <div>Basic stretching and Yoga flows.</div>
                </IonLabel>
              </IonItem>
            </IonList>
          </IonCard>

          <IonCard className="mt-4">
            <IonList className="profile-list p-0">
              <IonListHeader
                onClick={() => setShowCurrentDisorders(!showCurrentDisorders)}
              >
                <IonLabel className="left-align-no-margin">
                  <p>Current Disorders</p>
                </IonLabel>
                <IonIcon
                  color="primary"
                  className="mr-3"
                  size="large"
                  icon={
                    showCurrentDisorders
                      ? caretUpCircleOutline
                      : caretDownCircleOutline
                  }
                ></IonIcon>
              </IonListHeader>
              <div
                className={
                  showCurrentDisorders ? `expand-wrapper` : 'collapsed'
                }
              >
                <IonItem lines="inset">
                  <IonLabel>
                    <div>
                      <strong>Next class is on</strong>
                    </div>
                    <div> 10 am 23 October 2020</div>
                  </IonLabel>
                </IonItem>
                <IonItem lines="inset">
                  <IonLabel>
                    <div>
                      <strong>Alloted Time</strong>
                    </div>
                    <div className="row mb-4">
                      <div className="stick-left">10 am</div>

                      <IonFab vertical="bottom" horizontal="end" slot="fixed">
                        <IonFabButton size="small">
                          <IonIcon size="small" icon={pencil} />
                        </IonFabButton>
                      </IonFab>
                    </div>
                  </IonLabel>
                </IonItem>
                <IonItem lines="inset">
                  <IonLabel>
                    <strong>Workout Overview</strong>
                    <div>Basic stretching and Yoga flows.</div>
                  </IonLabel>
                </IonItem>
              </div>
            </IonList>
          </IonCard>
          <IonCard className="mt-4">
            <IonList className="profile-list p-0">
              <IonListHeader
                onClick={() => setShowDisordersHistory(!showDisordersHistory)}
              >
                <IonLabel className="left-align-no-margin">
                  <p>Disorders History</p>
                </IonLabel>
                <IonIcon
                  color="primary"
                  className="mr-3"
                  size="large"
                  icon={
                    showDisordersHistory
                      ? caretUpCircleOutline
                      : caretDownCircleOutline
                  }
                ></IonIcon>
              </IonListHeader>
              <div
                className={
                  showDisordersHistory ? 'expand-wrapper' : 'collapsed'
                }
              >
                <IonItem lines="inset">
                  <IonLabel>
                    <div>
                      <strong>Next class is on</strong>
                    </div>
                    <div> 10 am 23 October 2020</div>
                  </IonLabel>
                </IonItem>
                <IonItem lines="inset">
                  <IonLabel>
                    <div>
                      <strong>Alloted Time</strong>
                    </div>
                    <div className="row mb-4">
                      <div className="stick-left">10 am</div>

                      <IonFab vertical="bottom" horizontal="end" slot="fixed">
                        <IonFabButton size="small">
                          <IonIcon size="small" icon={pencil} />
                        </IonFabButton>
                      </IonFab>
                    </div>
                  </IonLabel>
                </IonItem>
                <IonItem lines="inset">
                  <IonLabel>
                    <strong>Workout Overview</strong>
                    <div>Basic stretching and Yoga flows.</div>
                  </IonLabel>
                </IonItem>
              </div>
            </IonList>
          </IonCard>
          <IonCard className="mt-4">
            <IonList className="profile-list p-0">
              <IonListHeader
                onClick={() => setShowWorkoutHistory(!showWorkoutHistory)}
              >
                <IonLabel className="left-align-no-margin">
                  <p>Workout History</p>
                </IonLabel>
                <IonIcon
                  color="primary"
                  className="mr-3"
                  size="large"
                  icon={
                    showWorkoutHistory
                      ? caretUpCircleOutline
                      : caretDownCircleOutline
                  }
                ></IonIcon>
              </IonListHeader>
              <div
                className={showWorkoutHistory ? 'expand-wrapper' : 'collapsed'}
              >
                <IonItem lines="inset">
                  <IonLabel>
                    <div>
                      <strong>Next class is on</strong>
                    </div>
                    <div> 10 am 23 October 2020</div>
                  </IonLabel>
                </IonItem>
                <IonItem lines="inset">
                  <IonLabel>
                    <div>
                      <strong>Alloted Time</strong>
                    </div>
                    <div className="row mb-4">
                      <div className="stick-left">10 am</div>

                      <IonFab vertical="bottom" horizontal="end" slot="fixed">
                        <IonFabButton size="small">
                          <IonIcon size="small" icon={pencil} />
                        </IonFabButton>
                      </IonFab>
                    </div>
                  </IonLabel>
                </IonItem>
                <IonItem lines="inset">
                  <IonLabel>
                    <strong>Workout Overview</strong>
                    <div>Basic stretching and Yoga flows.</div>
                  </IonLabel>
                </IonItem>
              </div>
            </IonList>
          </IonCard>

          <div className="col text-dark">
            <IonPopover
              isOpen={showPopover.open}
              event={showPopover.event}
              onDidDismiss={(e) =>
                setShowPopover({ open: false, event: undefined })
              }
            >
              <IonList>
                <IonListHeader>
                  <strong>Profile Options</strong>
                </IonListHeader>
                <IonItem button>Complete Profile</IonItem>
                <IonItem button>Add Disorder</IonItem>
                <IonItem button>Edit Profile</IonItem>
                <IonItem
                  lines="none"
                  detail={false}
                  button
                  onClick={(e) =>
                    setShowPopover({ open: false, event: undefined })
                  }
                >
                  Close
                </IonItem>
              </IonList>
            </IonPopover>
          </div>
        </IonCard>
      </div>
    </Fragment>
  );
};

export default PersonalInformation;
