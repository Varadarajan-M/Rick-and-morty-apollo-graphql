import { useQuery } from '@apollo/client';
import { GET_EPISODES } from '../../graphql/queries';
import { useMemo } from 'react';

export default function useEpisodes(name, page) {
	const variables = useMemo(() => {
		return {
			page: name.length === 0 ? page : null,
			filter: {
				name,
			},
		};
	}, [name, page]);
	const { loading, error, data } = useQuery(GET_EPISODES, {
		variables,
	});

	return { loading, error, data };
}
