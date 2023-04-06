import EpisodeCard from '../components/episodes/EpisodeCard';
import Search from '../components/Search';
import '../styles/episodes.scss';
import Loader from '../components/Loader';
import ReactPaginate from 'react-paginate';
import { useState, useCallback } from 'react';
import { useDebounceValue, useEpisodes } from '../hooks';
import NoResults from '../components/NoResults';
import { scrollToTop } from '../util.js';

const EpisodesPage = () => {
	const [page, setPage] = useState(1);
	const [episodeName, setEpisodeName] = useState('');
	const debouncedValue = useDebounceValue(episodeName, 700);
	const { loading, error, data } = useEpisodes(debouncedValue, page);
	const onPageChange = useCallback(({ selected }) => {
		scrollToTop();
		setPage((p) => selected + 1);
	}, []);

	if (error)
		return <NoResults text={error.message ?? 'Something went wrong'} />;

	if (!error)
		return (
			<section className='episode-page-container'>
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
						{!loading && !error && data.episodes.results.length === 0 && (
							<NoResults />
						)}
						{data.episodes.info.pages && data.episodes.info.pages > 1 && (
							<ReactPaginate
								previousLabel='Prev'
								pageClassName={'pagination-pages'}
								containerClassName='pagination-container'
								previousClassName='pagination__prev_btn'
								nextClassName='pagination__next_btn'
								activeClassName='active-page'
								onPageChange={onPageChange}
								pageRangeDisplayed={3}
								marginPagesDisplayed={2}
								pageCount={data.episodes.info.pages}
								forcePage={page - 1}
							/>
						)}
					</>
				)}
			</section>
		);
};

export default EpisodesPage;
