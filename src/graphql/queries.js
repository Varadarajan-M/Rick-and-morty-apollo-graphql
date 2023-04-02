import { gql } from '@apollo/client';

export const GET_CHARACTERS = gql`
	query getCharacters($filter: FilterCharacter, $page: Int!) {
		characters(filter: $filter, page: $page) {
			results {
				id
				name
				image
				gender
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
					created
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
