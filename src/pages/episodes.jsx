import { useQuery } from '@apollo/client';
import EpisodeCard from '../components/Episodes/EpisodeCard';
import Search from '../components/Search';
import '../styles/episodes.scss';
import { GET_EPISODES } from '../graphql/queries';
import Loader from '../components/Loader';
import ReactPaginate from 'react-paginate';
import { useMemo, useState } from 'react';
import { useDebounceValue } from '../hooks';

const EpisodesPage = () => {
	const [page, setPage] = useState(1);
	const [episodeName, setEpisodeName] = useState('');
	const debouncedValue = useDebounceValue(episodeName, 700);

	const variables = useMemo(() => {
		return {
			page: debouncedValue.length === 0 ? page : null,
			filter: {
				name: debouncedValue,
			},
		};
	}, [debouncedValue, page]);
	const { loading, error, data } = useQuery(GET_EPISODES, {
		variables,
	});

	if (error) return <p>Something went wrong...</p>;

	if (!error)
		return (
			<article className='episode-page-container'>
				<Search
					changeHandler={setEpisodeName}
					placeholder='Start to type Episode name...'
					value={episodeName}
					clear={() => setEpisodeName('')}
				/>
				{loading ? (
					<Loader />
				) : (
					<>
						<section className='episode__cards'>
							{data.episodes.results.map((episode) => (
								<EpisodeCard key={episode.id} episode={episode} />
							))}
						</section>
						{data.episodes.info.pages && (
							<ReactPaginate
								previousLabel='Prev'
								pageClassName={'pagination-pages'}
								containerClassName='pagination-container'
								previousClassName='pagination__prev_btn'
								nextClassName='pagination__next_btn'
								activeClassName='active-page'
								onPageChange={(selected) =>
									setPage((p) => selected.selected + 1)
								}
								pageRangeDisplayed={3}
								marginPagesDisplayed={2}
								pageCount={data.episodes.info.pages}
								forcePage={page - 1}
							/>
						)}
					</>
				)}
			</article>
		);
};

export default EpisodesPage;
