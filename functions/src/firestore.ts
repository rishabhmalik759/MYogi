import * as functions from 'firebase-functions';
import * as admin from 'firebase-admin';
import { IProfile } from './types/firestore';
admin.initializeApp();
const db = admin.firestore();

export const userCreated = functions.firestore
	.document('Users/{uid}')
	.onCreate(async (snapshot, context) => {
		const data = snapshot.data();
		console.log(JSON.stringify(data));
		const profile: IProfile = {
			user: {
				uid: data.uid,
				email: data.email,
				avatar: data.avatar,
				name: data.name,
				type: data.type,
			},
			level: 'Rookie',
		};
		return db
			.collection('Profile')
			.doc(data.uid)
			.set(profile)
			.then((docRef) => {
				console.log('Profile created.', docRef);
			})
			.catch((err) => {
				console.log('Error creating profile', err);
			});

		//	const userRef = db.doc(`Users/${data.uid}`);

		//return newProfile(data.user);
	});
