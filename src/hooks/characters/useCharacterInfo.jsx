import { useQuery } from '@apollo/client';
import { GET_CHARACTER_INFO } from '../../graphql/queries';
import { useMemo } from 'react';

export default function useCharacterInfo(id) {
	const { loading, error, data } = useQuery(GET_CHARACTER_INFO, {
		variables: {
			characterId: id,
		},
	});

	return { loading, error, data };
}
