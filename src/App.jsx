import Navbar from './components/Navbar';
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
import Router from './pages';
import './styles/global.scss';

const client = new ApolloClient({
	uri: 'https://rickandmortyapi.com/graphql',
	cache: new InMemoryCache(),
});

function App() {
	return (
		<div className='App'>
			<ApolloProvider client={client}>
				<Navbar />
				<Router />
			</ApolloProvider>
		</div>
	);
}

export default App;
