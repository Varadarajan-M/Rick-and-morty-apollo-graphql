import React from 'react';
import NoResultsImg from '../assets/no_results_img.778e8540.png';

const NoResults = ({ text }) => {
	return (
		<div
			style={{
				display: 'flex',
				width: '100%',
				height: '50vh',
				alignItems: 'center',
				flexDirection: 'column',
				justifyContent: 'center',
			}}
		>
			<img src={NoResultsImg} height={200} width={200} />

			<div style={{ color: 'white', fontWeight: 500 }}>
				{text ?? 'No Results'}
			</div>
		</div>
	);
};

export default NoResults;
