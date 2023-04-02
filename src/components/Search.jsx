import React from 'react';
import { IoCloseOutline } from 'react-icons/io5';

function Search({ clear, changeHandler, placeholder, value }) {
	return (
		<section className='character_episode__search'>
			<input
				onChange={(e) => changeHandler(e.target.value)}
				value={value}
				type='text'
				placeholder={placeholder}
			/>
			<IoCloseOutline onClick={clear} className='clear-search' />
		</section>
	);
}

export default React.memo(Search);
