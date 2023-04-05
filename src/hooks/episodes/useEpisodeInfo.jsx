import { useQuery } from '@apollo/client';
import { GET_EPISODE_INFO } from '../../graphql/queries';

export default function useEpisodeInfo(id) {
	const { loading, error, data } = useQuery(GET_EPISODE_INFO, {
		variables: {
			episodeId: id,
		},
	});

	return { loading, error, data };
}
