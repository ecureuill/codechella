import { Banner, Card, Text } from '../../components';
import data from '../../l10n/pt-br.json';
import { faker } from '@faker-js/faker';
import useMediaQueries from '../../hooks/useMediaQueries';
import './styles.css';

const MapPage = (): JSX.Element => {
	const { isSmallVW, isLargeVW } = useMediaQueries();

	const screen = isLargeVW? 'desktop' : isSmallVW? 'mobile' : 'tablet';

	return (
		<>
			<Banner image='map'>
				<Text variant='title-1'>{data.contents.headings.map}</Text>
			</Banner>
			<div className={'flex-column center'}>
				<img src={`/images/${screen}/image-6.png`} alt="map" />
				<ul className='legend--list'>
					<li className='legend legend--blue'><Text>{data.contents.glossary.pit}</Text></li>
					<li className='legend legend--pink'><Text>{data.contents.glossary.floor}</Text></li>
					<li className='legend legend--green'><Text>{data.contents.glossary.seatA}</Text></li>
					<li className='legend legend--darkblue'><Text>{data.contents.glossary.seatB}</Text></li>
					<li className='legend legend--blue'><Text>{data.contents.glossary.ramp}</Text></li>
				</ul>
			</div>
			<div className='main-wrapper'>
				<Text variant='paragraph' size='tiny'>{data.contents.headings['map-details']}</Text>
				<Card 
					image={`/images/${screen}/image-7.png`}
					title={data.contents.glossary.pit} 
					content={faker.lorem.sentence()} 
					variant='column'
				/>
				<Card 
					image={`/images/${screen}/image-8.png`}
					title={data.contents.glossary.floor} 
					content={faker.lorem.sentence()} 
					variant='column'
				/>
				<Card 
					image={`/images/${screen}/image-9.png`}
					title={data.contents.glossary.seats} 
					content={faker.lorem.sentence()} 
					variant='column'
				/>
			</div>
		</>
	);
};

export default MapPage;