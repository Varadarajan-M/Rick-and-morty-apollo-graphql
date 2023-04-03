import React, { lazy } from 'react';

import s1 from '../../assets/S01.png';
import s2 from '../../assets/S02.png';
import s3 from '../../assets/S02.png';
import s4 from '../../assets/S04.png';
import s5 from '../../assets/S05.png';

const thumbnails = {
	S01: s1,
	S02: s2,
	S03: s3,
	S04: s4,
	S05: s5,
};

const getThumbnailPath = (season) => {
	return thumbnails[season.substr(0, 3)];
};

const EpisodeCard = ({ episode }) => {
	return (
		<div className='episode-card'>
			<div className='episode__image'>
				<img
					src={getThumbnailPath(episode.episode)}
					alt='Episode Image'
					height={250}
					width={250}
				/>
				<span>{episode.episode}</span>
			</div>

			<div className='episode__details'>
				<h4 className='episode__name'>{episode.name}</h4>
				<div className='episode__aired_at'>
					<h6 className='title'>Aired at:</h6>
					<small className='desc'>{episode.air_date}</small>
				</div>
				<div className='episode__number'>
					<h6 className='title'>Episode:</h6>
					<p className='desc'>{episode.episode}</p>
				</div>
			</div>
		</div>
	);
};

export default EpisodeCard;
