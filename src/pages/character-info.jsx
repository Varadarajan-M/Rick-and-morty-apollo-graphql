import { useQuery } from '@apollo/client';
import { Link, useParams } from 'react-router-dom';
import { GET_CHARACTER_INFO } from '../graphql/queries';
import Loader from './../components/Loader';
import React, { Fragment, useState } from 'react';
import '../styles/character-info.scss';
import ReactPaginate from 'react-paginate';
import { useCustomPagination } from '../hooks';
import NoResults from './../components/NoResults';

const CharacterInfoPage = () => {
	const { id } = useParams();
	const { loading, error, data } = useQuery(GET_CHARACTER_INFO, {
		variables: {
			characterId: id,
		},
	});

	if (error) return <p>Something went wrong...</p>;

	if (!loading && !data.character) return <NoResults />;

	if (!error) {
		return (
			<Fragment>
				{loading ? (
					<Loader />
				) : (
					<>
						<div className='character__wrapper'>
							<section className='character__image-name-episodes'>
								<img
									className='character__image--round'
									height={250}
									width={250}
									src={data.character.image}
								/>
								<div className='character__name'>
									<p className='name'>{data.character.name}</p>
									<p className='total-episodes'>
										{data.character.episode.length}{' '}
										{data.character.episode.length > 1 ? 'episodes' : 'episode'}
									</p>
								</div>
							</section>

							<section className='character__info'>
								<h4 className='character__info--title'>Information</h4>
								<div className='character__info--card-wrapper'>
									<div className='character__info--attributes-card'>
										<h4>Gender</h4>
										<p>{data.character.gender}</p>
									</div>

									<div className='character__info--attributes-card'>
										<h4>Species</h4>
										<p>{data.character.species}</p>
									</div>
									<div className='character__info--attributes-card'>
										<h4>Origin</h4>
										<p>{data.character.origin.name}</p>
									</div>
									<div className='character__info--attributes-card'>
										<h4>Location</h4>
										<p>{data.character.location.name}</p>
									</div>
								</div>
							</section>
						</div>
						<section className='episodes'>
							<h3 className='header'>Episodes</h3>
							<PaginatedEpisodesList data={data?.character?.episode} />
						</section>
					</>
				)}
			</Fragment>
		);
	}
};

const PaginatedEpisodesList = React.memo(({ data }) => {
	const { page, setPage, paginatedData, totalPages } = useCustomPagination(
		data,
		10,
	);
	return (
		<Fragment>
			<div className='episodes__wrapper'>
				{paginatedData?.map((episode) => (
					<div className='episode' key={episode.id}>
						<Link to={`/episodes/${episode.id}`}>
							<h4 className='episode__name'>{episode.name}</h4>
						</Link>
						<p className='episode__aired-at'>{episode.air_date}</p>
						<p className='episode__season'>{episode?.episode}</p>
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
export default CharacterInfoPage;
