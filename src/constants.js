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
