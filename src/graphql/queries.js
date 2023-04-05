import { gql } from '@apollo/client';

export const GET_CHARACTERS = gql`
	query getCharacters($filter: FilterCharacter, $page: Int) {
		characters(filter: $filter, page: $page) {
			results {
				id
				name
				image
				status
				species
				origin {
					name
				}
				location {
					name
				}
				episode {
					name
				}
			}
			info {
				count
				next
				pages
				prev
			}
		}
	}
`;

export const GET_EPISODES = gql`
	query getEpisodes($filter: FilterEpisode, $page: Int) {
		episodes(filter: $filter, page: $page) {
			results {
				name
				id
				episode
				created
				air_date
			}
			info {
				count
				next
				pages
				prev
			}
		}
	}
`;

export const GET_CHARACTER_INFO = gql`
	query getCharacterInfo($characterId: ID!) {
		character(id: $characterId) {
			name
			id
			gender
			image
			species
			status
			type
			episode {
				name
				id
				episode
				created
				air_date
			}
			origin {
				name
			}
			location {
				name
			}
		}
	}
`;

/* 

	Here querying the field:"episode" is not required/mentioned in the requirement.
	However, it is queried to display a thumbnail for the episode according to the season number as done in the episode list page.

*/

export const GET_EPISODE_INFO = gql`
	query getEpisodeInfo($episodeId: ID!) {
		episode(id: $episodeId) {
			id
			name
			air_date
			episode
			characters {
				name
				image
				id
			}
		}
	}
`;
