import {
  IonBadge,
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
import { pencil } from 'ionicons/icons';

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
                  <IonIcon icon={pencil} />
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
          <div>
            <IonList className="profile-list">
              <IonItem>
                <IonLabel color="primary">BMI</IonLabel>
                <IonBadge color="primary">23</IonBadge>
              </IonItem>
            </IonList>
          </div>
          <div className="left-align">
            <IonChip color="primary">
              <IonLabel>
                <strong>BMI</strong> &nbsp;&nbsp;&nbsp;&nbsp;23
              </IonLabel>
            </IonChip>
          </div>
          <div className="row  profile-personal-card center">
            <IonCard slot="start">
              <IonCardHeader>
                <IonCardTitle>Age</IonCardTitle>
              </IonCardHeader>
              <IonCardContent>25</IonCardContent>
            </IonCard>
            <IonCard>
              <IonCardHeader>
                <IonCardTitle>Weight</IonCardTitle>
              </IonCardHeader>
              <IonCardContent>25</IonCardContent>
            </IonCard>
            <IonCard>
              <IonCardHeader>
                <IonCardTitle>Height</IonCardTitle>
              </IonCardHeader>
              <IonCardContent>25</IonCardContent>
            </IonCard>
          </div>
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
              </IonList>{' '}
            </IonPopover>
          </div>
        </IonCard>
      </div>
    </Fragment>
  );
};

export default PersonalInformation;
