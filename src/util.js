export const characterFilters = {
	Status: [
		{ filter: 'status', value: 'Alive' },
		{ filter: 'status', value: 'Dead' },
		{ filter: 'status', value: 'Unknown' },
	],
	Species: [
		{ filter: 'species', value: 'Human' },
		{ filter: 'species', value: 'Humanoid' },
		{ filter: 'species', value: 'Poopybutthole' },
		{ filter: 'species', value: 'Mythological' },
		{ filter: 'species', value: 'Unknown' },
		{ filter: 'species', value: 'Animal' },
		{ filter: 'species', value: 'Robot' },
		{ filter: 'species', value: 'Cronenberg' },
		{ filter: 'species', value: 'Alien' },
		{ filter: 'species', value: 'Disease' },
	],
	Gender: [
		{ filter: 'gender', value: 'Male' },
		{ filter: 'gender', value: 'Female' },
		{ filter: 'gender', value: 'Genderless' },
		{ filter: 'gender', value: 'Unknown' },
	],
};
export const initialFilters = {
	gender: '',
	species: '',
	status: '',
};

import s1 from './assets/S01.png';
import s2 from './assets/S02.png';
import s3 from './assets/S02.png';
import s4 from './assets/S04.png';
import s5 from './assets/S05.png';

const thumbnails = {
	S01: s1,
	S02: s2,
	S03: s3,
	S04: s4,
	S05: s5,
};

export const getThumbnailPath = (season) => {
	return thumbnails[season.substr(0, 3)];
};

export const scrollToTop = () => {
	document.documentElement.scrollTo({
		top: 0,
		left: 0,
		behavior: 'smooth',
	});
};
