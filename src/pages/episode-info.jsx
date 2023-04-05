import React, { Fragment } from 'react';
import '../styles/episode-info.scss';
import { Link, useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import NoResults from '../components/NoResults';
import { GET_EPISODE_INFO } from '../graphql/queries';
import { getThumbnailPath } from '../util';
import ReactPaginate from 'react-paginate';
import { useCustomPagination, useEpisodeInfo } from '../hooks';
import Loader from './../components/Loader';

const EpisodeInfoPage = () => {
	const { id } = useParams();
	const { loading, error, data } = useEpisodeInfo(id);

	if (loading) return <Loader />;

	if (error)
		return <NoResults text={error.message ?? 'Something went wrong..'} />;

	if (!loading && !data.episode) return <NoResults />;

	if (!error && data?.episode)
		return (
			<section className='episode-info__wrapper'>
				<img
					height={250}
					width={250}
					alt={data.episode.episode}
					className='episode-info__thumbnail'
					src={getThumbnailPath(data.episode.episode)}
				/>
				<h4 className='episode-info__title'>{data.episode.name}</h4>
				<small className='episode-info__air-date'>
					{data.episode.air_date}
				</small>

				<div className='episode-info__character-list'>
					<h4 className='character-list__header'>Characters </h4>
					<PaginatedCharacterList data={data.episode.characters} />
				</div>
			</section>
		);
};

const PaginatedCharacterList = React.memo(({ data }) => {
	const { page, setPage, paginatedData, totalPages } = useCustomPagination(
		data,
		10,
	);
	return (
		<Fragment>
			<div className='characters__wrapper'>
				{paginatedData?.map((character) => (
					<div className='character' key={character.id}>
						<img
							className='character__img'
							src={character.image}
							alt={character.name}
							height={60}
							width={60}
						/>
						<Link to={`/characters/${character.id}`}>
							<h4 className='character__name'>{character.name}</h4>
						</Link>
					</div>
				))}
			</div>
			{totalPages > 1 && (
				<ReactPaginate
					previousLabel='Prev'
					pageClassName={'pagination-pages'}
					containerClassName='pagination-container'
					previousClassName='pagination__prev_btn'
					nextClassName='pagination__next_btn'
					activeClassName='active-page'
					onPageChange={(selected) => setPage((p) => selected.selected + 1)}
					pageRangeDisplayed={3}
					marginPagesDisplayed={2}
					pageCount={totalPages}
					forcePage={page - 1}
				/>
			)}
		</Fragment>
	);
});

export default EpisodeInfoPage;
