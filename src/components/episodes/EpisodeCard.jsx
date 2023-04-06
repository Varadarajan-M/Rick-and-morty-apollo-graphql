import React from 'react';
import { Link } from 'react-router-dom';
import { getThumbnailPath } from '../../util';
import { HiOutlineExternalLink } from 'react-icons/hi';

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
				<Link to={`/episodes/${episode.id}`}>
					<h4 className='episode__name'>{episode.name}</h4>
					<HiOutlineExternalLink className='episode__name' />
				</Link>

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
