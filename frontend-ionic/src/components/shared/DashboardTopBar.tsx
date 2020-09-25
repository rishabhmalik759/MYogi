import { IonToolbar } from '@ionic/react';
import React from 'react';

const DashboardTopBar: React.FC = () => {
  return (
    <IonToolbar className="dark-background">
      <h5 className="text-light ml-2 center">MYOGI</h5>
    </IonToolbar>
  );
};

export default DashboardTopBar;
