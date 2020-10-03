import {
	IonAvatar,
	IonButton,
	IonButtons,
	IonCard,
	IonCardContent,
	IonCardHeader,
	IonCardSubtitle,
	IonCardTitle,
	IonChip,
	IonContent,
	IonFab,
	IonFabButton,
	IonFabList,
	IonHeader,
	IonIcon,
	IonInput,
	IonItem,
	IonLabel,
	IonList,
	IonListHeader,
	IonPopover,
	IonTitle,
	IonToolbar,
} from '@ionic/react';
import {
	logoFacebook,
	logoInstagram,
	logoLinkedin,
	logoTwitter,
	logoYoutube,
	pin,
	text,
	ellipsisVerticalCircle,
	pencil,
	arrowForwardCircle,
} from 'ionicons/icons';

import React, { Fragment, useState } from 'react';
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
	const [showPopover, setShowPopover] = useState<{
		open: boolean;
		event: Event | undefined;
	}>({
		open: false,
		event: undefined,
	});
	return (
		<Fragment>
			<div className='col-md-8 center'>
				<IonCard className='p-0 background-light border-light'>
					<div>
						<div className='parent'> </div>
						<div
							className='card ml-4 '
							style={{
								zIndex: 2,
								width: '8em',
								top: -20,
								position: 'relative',
								borderRadius: '50%',
							}}
						>
							{' '}
							<img style={{ borderRadius: '50%' }} src={avatar}></img>
						</div>
					</div>
					<div className='row'>
						<div className='col-md-10'></div>
						<div className='col text-dark'>
							<IonButtons slot='end'>
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
											lines='none'
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

								<IonFab vertical='bottom' horizontal='end' slot='fixed'>
									<IonFabButton
										size='small'
										onClick={(e) =>
											setShowPopover({ open: true, event: e.nativeEvent })
										}
									>
										<IonIcon icon={pencil} />
									</IonFabButton>
								</IonFab>
							</IonButtons>
						</div>
					</div>
					<p>Something is crazy</p>
				</IonCard>
			</div>
		</Fragment>
	);
};

export default PersonalInformation;
