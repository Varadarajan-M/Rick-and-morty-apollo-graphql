import React from 'react';
import { BsFillCircleFill } from 'react-icons/bs';
const CharacterCard = ({ character }) => {
	return (
		<div className='character-card'>
			<div className='character__image'>
				<img src={character.image} alt='character Image' />
			</div>

			<div className='character__details'>
				<div className='character__name-and-status'>
					<h4 className='title'>{character.name}</h4>
					<span className='desc'>
						<BsFillCircleFill className='red-dot' />
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
