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
	IonNote,
	IonThumbnail,
} from '@ionic/react';

import React from 'react';
import { useLocation } from 'react-router-dom';
import {
	archiveOutline,
	archiveSharp,
	bookmarkOutline,
	heartOutline,
	heartSharp,
	mailOutline,
	mailSharp,
	paperPlaneOutline,
	paperPlaneSharp,
	trashOutline,
	trashSharp,
	warningOutline,
	warningSharp,
} from 'ionicons/icons';
import './Menu.css';
import { getCurrentUser } from '../../store/sagas/firebase';

interface AppPage {
	url: string;
	iosIcon: string;
	mdIcon: string;
	title: string;
}

const appPages: AppPage[] = [
	{
		title: 'Inbox',
		url: '/dashboard/inbox',
		iosIcon: mailOutline,
		mdIcon: mailSharp,
	},
	{
		title: 'Outbox',
		url: '/dashboard/outbox',
		iosIcon: paperPlaneOutline,
		mdIcon: paperPlaneSharp,
	},
	{
		title: 'Favorites',
		url: '/dashboard/favorites',
		iosIcon: heartOutline,
		mdIcon: heartSharp,
	},
	{
		title: 'Archived',
		url: '/dashboard/archived',
		iosIcon: archiveOutline,
		mdIcon: archiveSharp,
	},
	{
		title: 'Trash',
		url: '/dashboard/trash',
		iosIcon: trashOutline,
		mdIcon: trashSharp,
	},
	{
		title: 'Spam',
		url: '/dashboard/spam',
		iosIcon: warningOutline,
		mdIcon: warningSharp,
	},
];

const labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];

const Menu: React.FC = () => {
	const location = useLocation();
	const currentUser = getCurrentUser();
	return (
		<IonMenu contentId='main' type='overlay'>
			<IonContent>
				<IonList id='labels-list'>
					{' '}
					<IonAvatar slot='end'>
						<img src={currentUser?.photoURL as string} />
					</IonAvatar>
					<IonLabel>{currentUser?.displayName}</IonLabel>
				</IonList>
				<IonLabel>Member</IonLabel>
				<IonList id='inbox-list'>
					{appPages.map((appPage, index) => {
						return (
							<IonMenuToggle key={index} autoHide={true}>
								<IonItem
									className={
										location.pathname === appPage.url ? 'selected' : ''
									}
									routerLink={appPage.url}
									routerDirection='none'
									lines='none'
									detail={false}
								>
									<IonIcon
										slot='start'
										ios={appPage.iosIcon}
										md={appPage.mdIcon}
									/>
									<IonLabel>{appPage.title}</IonLabel>
								</IonItem>
							</IonMenuToggle>
						);
					})}
				</IonList>

				<IonList id='labels-list'>
					<IonListHeader>Labels</IonListHeader>
					{labels.map((label, index) => (
						<IonItem lines='none' key={index}>
							<IonIcon slot='start' icon={bookmarkOutline} />
							<IonLabel>{label}</IonLabel>
						</IonItem>
					))}
				</IonList>
			</IonContent>
		</IonMenu>
	);
};

export default Menu;
