import { Route, Routes, Navigate } from 'react-router-dom';
import CharactersPage from './characters';
import EpisodesPage from './episodes';
import CharacterInfoPage from './character-info';
import EpisodeInfoPage from './episode-info';

const routes = [
	{
		path: '/characters',
		element: <CharactersPage />,
	},
	{
		path: '/characters/:id',
		element: <CharacterInfoPage />,
	},
	{
		path: '/episodes',
		element: <EpisodesPage />,
	},
	{
		path: '/episodes/:id',
		element: <EpisodeInfoPage />,
	},
];

const Router = () => {
	return (
		<Routes>
			{routes.map((route) => (
				<Route key={route.path} path={route.path} element={route.element} />
			))}
			<Route path='*' element={<Navigate to='/characters' />} />
		</Routes>
	);
};

export default Router;
