import { useQuery } from '@apollo/client';
import { GET_CHARACTERS } from '../../graphql/queries';
import { useMemo } from 'react';

export default function useCharacters(name, filter, page) {
	const variables = useMemo(() => {
		return {
			page: name.length === 0 ? page : null,
			filter: {
				...filter,
				name,
			},
		};
	}, [filter, name, page]);

	const { loading, error, data } = useQuery(GET_CHARACTERS, {
		variables,
	});

	return { loading, error, data };
}
