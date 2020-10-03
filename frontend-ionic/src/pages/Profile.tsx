import {
	IonButtons,
	IonContent,
	IonHeader,
	IonMenuButton,
	IonPage,
	IonTitle,
	IonToolbar,
} from '@ionic/react';

import React, { Fragment } from 'react';
import ExploreContainer from '../components/shared/ExploreContainer';
import './Page.scss';
import Header from '../components/profileSummary/Header';
import ProfileInformation from '../components/profileSummary/PersonalInformation';
import '../components/profileSummary/Profile.scss';
const Profile: React.FC = () => {
	return (
		<IonPage>
			<Header />
			<IonContent fullscreen>
				<Fragment>
					<ProfileInformation />
				</Fragment>
			</IonContent>
		</IonPage>
	);
};

export default Profile;
