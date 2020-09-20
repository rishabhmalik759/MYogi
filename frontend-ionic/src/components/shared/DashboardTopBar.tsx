import { IonToolbar, IonButton, IonIcon } from '@ionic/react';
import { logOut } from 'ionicons/icons';
import React, { Dispatch } from 'react';
import { useDispatch } from 'react-redux';
import { IUserActions, logoutUser } from '../../store/actions/userActions';

const DashboardTopBar: React.FC = () => {
  const userDispatch = useDispatch<Dispatch<IUserActions>>();

  const _handleLogOut = () => {
    return userDispatch(logoutUser());
  };

  return (
    <IonToolbar className="dark-background">
      <IonButton
        onClick={_handleLogOut}
        color="danger"
        slot="end"
        className="m-2"
      >
        <IonIcon icon={logOut} style={{ color: 'white' }}></IonIcon>
      </IonButton>

      <h3 className="text-light">MYOGI</h3>
    </IonToolbar>
  );
};

export default DashboardTopBar;
