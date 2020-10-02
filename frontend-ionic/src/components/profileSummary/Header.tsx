import {
	IonButton,
	IonButtons,
	IonCard,
	IonCardContent,
	IonContent,
	IonHeader,
	IonIcon,
	IonItem,
	IonLabel,
	IonMenuButton,
	IonTitle,
	IonToolbar,
} from '@ionic/react';
import { pin } from 'ionicons/icons';

import React, { Fragment } from 'react';
import DashboardTopBar from '../shared/DashboardTopBar';
import ExploreContainer from '../shared/ExploreContainer';

const Header: React.FC = () => {
	return (
		<Fragment>
			<IonHeader>
				<DashboardTopBar />

				<IonToolbar className='background-grey '>
					<IonButtons slot='start'>
						<IonMenuButton />
					</IonButtons>
					<IonTitle>Profile Summary</IonTitle>
				</IonToolbar>
			</IonHeader>
		</Fragment>
	);
};

export default Header;
