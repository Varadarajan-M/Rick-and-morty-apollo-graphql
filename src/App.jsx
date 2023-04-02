import Navbar from './components/Navbar';
import './styles/global.scss';
import CharactersPage from './pages/characters';
import { Navigate, Route, Routes } from 'react-router-dom';
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';

const routes = [
	{
		path: '/characters',
		element: CharactersPage,
	},
	{
		path: '/episodes',
		element: CharactersPage,
	},
];

const cache = new InMemoryCache();

const client = new ApolloClient({
	uri: 'https://rickandmortyapi.com/graphql',
	cache,
});

function App() {
	return (
		<div className='App'>
			<ApolloProvider client={client}>
				<Navbar />
				<Routes>
					{routes.map((route) => (
						<Route
							key={route.path}
							path={route.path}
							element={<route.element />}
						/>
					))}
					<Route path='*' element={<Navigate to='/characters' />} />
				</Routes>
			</ApolloProvider>
		</div>
	);
}

export default App;
