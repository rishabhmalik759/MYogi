import {
	cubeOutline,
	cubeSharp,
	happyOutline,
	happySharp,
	logOutOutline,
	logOutSharp,
	personOutline,
	personSharp,
	videocamOutline,
	videocamSharp,
	walletOutline,
	walletSharp,
} from 'ionicons/icons';

interface AppPage {
	url: string;
	iosIcon: string;
	mdIcon: string;
	title: string;
}

export const appPages: AppPage[] = [
	{
		title: 'Sessions',
		url: '/dashboard/sessions',
		iosIcon: videocamOutline,
		mdIcon: videocamSharp,
	},
	{
		title: 'Profile',
		url: '/dashboard/profile',
		iosIcon: personOutline,
		mdIcon: personSharp,
	},
	{
		title: 'Account', // payment methods and Addresses
		url: '/dashboard/account',
		iosIcon: walletOutline,
		mdIcon: walletSharp,
	},
	{
		title: 'Packs and Subscriptions',
		url: '/dashboard/packs',
		iosIcon: cubeOutline,
		mdIcon: cubeSharp,
	},
	{
		title: 'Support',
		url: '/dashboard/support',
		iosIcon: happyOutline,
		mdIcon: happySharp,
	},
	{
		title: 'Logout',
		url: '/',
		iosIcon: logOutOutline,
		mdIcon: logOutSharp,
	},
];
