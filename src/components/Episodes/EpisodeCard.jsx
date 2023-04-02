import React from 'react';
import logo from '../../assets/s1.png';
const EpisodeCard = ({ episode }) => {
	return (
		<div className='episode-card'>
			<div className='episode__image'>
				<img src={logo} alt='Episode Image' />
			</div>

			<div className='episode__details'></div>
		</div>
	);
};

export default EpisodeCard;
