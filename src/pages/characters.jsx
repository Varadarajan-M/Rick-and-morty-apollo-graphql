import React, { useCallback, useMemo, useState } from 'react';
import CharacterCard from '../components/Characters/CharacterCard';
import { useQuery } from '@apollo/client';
import '../styles/characters.scss';
import { GET_CHARACTERS } from '../graphql/queries';
import { characterFilters, initialFilters } from './../util';
import CharacterFilter from '../components/Characters/CharacterFilter';
import { AiFillCaretDown } from 'react-icons/ai';
import { FcClearFilters } from 'react-icons/fc';
import ReactPaginate from 'react-paginate';
import Loader from '../components/Loader';
import { useDebounceValue } from '../hooks';
import NoResults from '../components/NoResults';
import Search from '../components/Search';

const CharactersPage = () => {
	const [characterName, setCharacterName] = useState('');
	const debouncedValue = useDebounceValue(characterName, 700);

	const [page, setPage] = useState(1);
	const [appliedFilters, setAppliedFilters] = useState(initialFilters);
	const variables = useMemo(() => {
		return {
			page: debouncedValue.length === 0 ? page : null,
			filter: {
				...appliedFilters,
				name: debouncedValue,
			},
		};
	}, [appliedFilters, debouncedValue, page]);
	const { loading, error, data } = useQuery(GET_CHARACTERS, {
		variables,
	});

	const [showFilters, setShowFilters] = useState(false);

	const toggleFilterVisibility = () => setShowFilters(!showFilters);

	const applyFilters = useCallback((data) => {
		setAppliedFilters((prev) => ({ ...prev, [data.filter]: data.value }));
	}, []);

	const filterActions = useMemo(
		() => [
			{
				action: 'Show Filters',
				actionClass: 'toggle__filters',
				icon: AiFillCaretDown,
				iconClass: `show-filter__icon ${showFilters ? 'active' : ''} `,
				fn: toggleFilterVisibility,
			},
			{
				action: 'Clear Filters',
				actionClass: 'clear__filters',
				icon: FcClearFilters,
				iconClass: '',
				fn: () => setAppliedFilters(initialFilters),
			},
		],
		[showFilters],
	);

	const clearSearch = useCallback(() => setCharacterName(''), []);

	if (error) return <p>Something went wrong...</p>;

	if (!error)
		return (
			<section className='character__section'>
				<Search
					changeHandler={setCharacterName}
					placeholder='Start to type character name...'
					value={characterName}
					clear={clearSearch}
				/>
				<section className='character__filters'>
					<div className='filter-actions'>
						{filterActions.map((item) => (
							<button
								key={item.action}
								onClick={item.fn}
								className={item.actionClass}
							>
								{item.action} <item.icon className={item.iconClass} />{' '}
							</button>
						))}
					</div>

					{showFilters
						? Object.keys(characterFilters).map((filter) => (
								<CharacterFilter
									appliedFilters={appliedFilters}
									onFilterClick={applyFilters}
									typeClass={'filter-type'}
									filterClass={'filter'}
									key={filter}
									type={filter}
									values={characterFilters[filter]}
								/>
						  ))
						: ''}
				</section>
				{loading ? (
					<Loader />
				) : (
					<>
						<section className='character__cards'>
							{data.characters.results.map((character) => (
								<CharacterCard key={character.id} character={character} />
							))}
						</section>
						{!loading && !error && data.characters.results.length === 0 && (
							<NoResults />
						)}
						{data.characters.info.pages && data.characters.info.pages > 1 && (
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
								pageCount={data.characters.info.pages}
								forcePage={page - 1}
							/>
						)}
					</>
				)}
			</section>
		);
};

export default CharactersPage;
