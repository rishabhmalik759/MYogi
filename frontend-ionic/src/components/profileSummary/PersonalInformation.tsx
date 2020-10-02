import {
	IonAvatar,
	IonButton,
	IonCard,
	IonCardContent,
	IonCardHeader,
	IonCardSubtitle,
	IonCardTitle,
	IonChip,
	IonContent,
	IonHeader,
	IonIcon,
	IonItem,
	IonLabel,
	IonTitle,
	IonToolbar,
} from '@ionic/react';
import { pin } from 'ionicons/icons';

import React, { Fragment } from 'react';
import { useSelector } from 'react-redux';
import { AppState } from '../../store/reducers';
import ExploreContainer from '../shared/ExploreContainer';

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
	return (
		<Fragment>
			<div className='center'>
				<h1>Profile Summary </h1>
			</div>

			<IonCardHeader>
				<IonCardSubtitle>{name}</IonCardSubtitle>
				<IonCardTitle>{type}</IonCardTitle>
				<IonLabel>{email}</IonLabel>
			</IonCardHeader>

			<IonCardContent>
				<IonChip>
					<IonAvatar>
						<img src={avatar} />
					</IonAvatar>
					<IonLabel>{name}</IonLabel>
				</IonChip>
			</IonCardContent>
			<ExploreContainer name='Profile Summary' />
		</Fragment>
	);
};

export default PersonalInformation;
