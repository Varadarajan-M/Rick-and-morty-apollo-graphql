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
