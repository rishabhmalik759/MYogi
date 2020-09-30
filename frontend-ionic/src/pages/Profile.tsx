import {
	IonButtons,
	IonContent,
	IonHeader,
	IonMenuButton,
	IonPage,
	IonTitle,
	IonToolbar,
} from '@ionic/react';

import React from 'react';
import ExploreContainer from '../components/shared/ExploreContainer';
import './Page.scss';
import Header from '../components/profile/Header';
const Page: React.FC = () => {
	return (
		<IonPage>
			<Header />
		</IonPage>
	);
};

export default Page;
