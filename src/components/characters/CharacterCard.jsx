import React from 'react';
import { BsFillCircleFill } from 'react-icons/bs';
import { Link } from 'react-router-dom';

const colorsByStatus = {
	Alive: '#0ecb0e',
	Dead: 'crimson',
	unknown: 'yellow',
};

const CharacterCard = ({ character }) => {
	return (
		<div className='character-card'>
			<div className='character__image'>
				<img src={character.image} alt='character Image' />
			</div>

			<div className='character__details'>
				<div className='character__name-and-status'>
					<Link to={`/characters/${character.id}`}>
						<h4 className='title'>{character.name}</h4>
					</Link>

					<span className='desc'>
						<BsFillCircleFill
							style={{
								color: colorsByStatus[character.status],
							}}
							className='dot'
						/>
						{character.status} - {character.species}
					</span>
				</div>

				<div className='character__last-known-location'>
					<h5 className='title'>Last Known Location:</h5>
					<p className='desc'>{character.location?.name}</p>
				</div>

				<div className='character__first-seen'>
					<h6 className='title'>First seen in:</h6>
					<p className='desc'>{character?.episode[0]?.name}</p>
				</div>
			</div>
		</div>
	);
};

export default CharacterCard;
