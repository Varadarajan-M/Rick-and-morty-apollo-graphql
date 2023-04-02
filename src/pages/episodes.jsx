import EpisodeCard from '../components/Episodes/EpisodeCard';
import Search from '../components/Search';
import '../styles/episodes.scss';

const EpisodesPage = () => {
	return (
		<article className='episode-page-container'>
			<Search
				changeHandler={console.log}
				placeholder='Start to type Episode name...'
				value={'Episode Name'}
				clear={() => console.log('')}
			/>
			<section className='episode__cards'>
				<EpisodeCard />
			</section>
		</article>
	);
};

export default EpisodesPage;
