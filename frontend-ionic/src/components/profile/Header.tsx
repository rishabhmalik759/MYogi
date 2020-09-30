import {
	IonButtons,
	IonContent,
	IonHeader,
	IonMenuButton,
	IonTitle,
	IonToolbar,
} from '@ionic/react';

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
					<IonTitle>Profile</IonTitle>
				</IonToolbar>
			</IonHeader>

			<IonContent fullscreen>
				<IonHeader collapse='condense'>
					<IonToolbar>
						<IonTitle size='large'>Profile</IonTitle>
					</IonToolbar>
				</IonHeader>
				<ExploreContainer name='Profile' />
			</IonContent>
		</Fragment>
	);
};

export default Header;
