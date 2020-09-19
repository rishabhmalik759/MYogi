import { IonHeader, IonToolbar, IonIcon, IonButton } from '@ionic/react';
import React, { Dispatch } from 'react';
import { menu, personCircle, arrowForwardCircle } from 'ionicons/icons';
import { IModalActions, showModal } from '../../store/actions/modalActions';
import { useDispatch } from 'react-redux';
// import { useModalContext } from '../../store/contexts/ModalContext';

import { modalNames } from '../modal/Modal';

const HomeHeader: React.FC = () => {
	const modalDispatch = useDispatch<Dispatch<IModalActions>>();

	function handleModalOpen(name: string) {
		modalDispatch(showModal(name));
	}

	return (
		<div>
			<IonHeader>
				<IonToolbar className='dark-background'>
					<IonButton slot='start' className='m-2'>
						<IonIcon icon={menu} style={{ color: 'white' }}></IonIcon>
					</IonButton>

					<IonButton
						slot='end'
						className='m-2'
						onClick={() => handleModalOpen(modalNames.loginModalName)}
					>
						<IonIcon icon={personCircle} style={{ color: 'white' }}></IonIcon>
					</IonButton>
					<div className='center'>
						{' '}
						<img
							className='logo'
							alt='MYogi Logo'
							src='/assets/images/logoWhite.png'
						></img>
					</div>
				</IonToolbar>
			</IonHeader>
			<div
				className='col-md-12 pt-5 pb-5'
				style={{
					background:
						'radial-gradient(circle, rgba(126,87,194,1) 0%, rgba(75,55,109,1) 26%, rgba(58,45,81,1) 41%, rgba(47,38,63,1) 58%, rgba(24,24,24,1) 100%)',
				}}
			>
				<div
					className='col-md-5'
					style={{ margin: '0 auto', textAlign: 'center' }}
				>
					<h1
						style={{ textAlign: 'center' }}
						className='mega-heading light-text'
					>
						Bringing personal training to your home
					</h1>
					<p className='grey-text'>
						MYOGI is the best platform to stay fit at home through Yoga and
						Dietitian
					</p>
					<IonButton onClick={() => handleModalOpen(modalNames.loginModalName)}>
						Get a week free
						<IonIcon slot='end' icon={arrowForwardCircle}></IonIcon>
					</IonButton>
				</div>
			</div>
		</div>
	);
};

export default HomeHeader;
