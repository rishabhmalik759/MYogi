import {
  IonAvatar,
  IonContent,
  IonIcon,
  IonItem,
  IonLabel,
  IonList,
  IonListHeader,
  IonMenu,
  IonMenuToggle,
} from '@ionic/react';
import { useDispatch, useSelector } from 'react-redux';

import React, { Dispatch } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { bookmarkOutline } from 'ionicons/icons';
import './Menu.css';
import { appPages } from '../../routes';
import { AppState } from '../../store/reducers';
import { IUserActions, logoutUser } from '../../store/actions/userActions';

const labels = ['Favorite Videos', 'About Us', 'FAQ'];

const Menu: React.FC = () => {
  const location = useLocation();
  const { avatar, name, type } = useSelector(
    (state: AppState) => state.userState
  );

  const userDispatch = useDispatch<Dispatch<IUserActions>>();
  const _handleLogOut = () => {
    return userDispatch(logoutUser());
  };

  return (
    <IonMenu
      contentId="main"
      className="background-grey text-light"
      type="overlay"
    >
      <IonContent className="text-light">
        <IonList id="inbox-list">
          <IonMenuToggle autoHide={true}>
            <div className="center mb-4">
              <IonAvatar className="center mb-2">
                <img alt="temp" src={avatar}></img>
              </IonAvatar>
              <IonLabel>
                <h2>{name}</h2>
                <h5>{type}</h5>
                <Link to="/dashboard/profile">VIEW PROFILE</Link>
              </IonLabel>
            </div>
          </IonMenuToggle>
          {appPages.map((appPage, index) => {
            return (
              <IonMenuToggle key={index} autoHide={true}>
                {appPage.title === 'Logout' ? (
                  <IonItem
                    className={
                      location.pathname === appPage.url ? 'selected' : ''
                    }
                    onClick={_handleLogOut}
                    routerLink="/"
                    routerDirection="none"
                    lines="none"
                    detail={false}
                  >
                    <IonIcon
                      slot="start"
                      ios={appPage.iosIcon}
                      md={appPage.mdIcon}
                    />
                    <IonLabel>{appPage.title}</IonLabel>
                  </IonItem>
                ) : (
                  <IonItem
                    className={
                      location.pathname === appPage.url ? 'selected' : ''
                    }
                    routerLink={appPage.url}
                    routerDirection="none"
                    lines="none"
                    detail={false}
                  >
                    <IonIcon
                      slot="start"
                      ios={appPage.iosIcon}
                      md={appPage.mdIcon}
                    />
                    <IonLabel>{appPage.title}</IonLabel>
                  </IonItem>
                )}
              </IonMenuToggle>
            );
          })}
        </IonList>

        <IonList id="labels-list">
          <IonListHeader>Extras</IonListHeader>
          {labels.map((label, index) => (
            <IonItem lines="none" key={index}>
              <IonIcon slot="start" icon={bookmarkOutline} />
              <IonLabel>{label}</IonLabel>
            </IonItem>
          ))}
        </IonList>
      </IonContent>
    </IonMenu>
  );
};

export default Menu;
