import { Banner, Card, Text } from '../../components';
import data from '../../l10n/pt-br.json';
import IMG1 from '../../assets/images/card-summer-mobile-6.png' ;
import IMG2 from '../../assets/images/card-summer-mobile-7.png' ;
import IMG3 from '../../assets/images/card-summer-mobile-8.png' ;
import IMG4 from '../../assets/images/card-summer-mobile-9.png' ;
import { faker } from '@faker-js/faker';

const MapPage = (): JSX.Element => {
	return (
		<>
			<Banner image='experience'>
				<Text variant='title-1'>{data.contents.headings.experience}</Text>
			</Banner>
			<div className='flex-column flex-column--center'>
				<img src={IMG1} alt="map" />
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
					image={IMG2}
					title={data.contents.glossary.pit} 
					content={faker.lorem.sentence()} 
					variant='column'
				/>
				<Card 
					image={IMG3}
					title={data.contents.glossary.floor} 
					content={faker.lorem.sentence()} 
					variant='column'
				/>
				<Card 
					image={IMG4}
					title={data.contents.glossary.seats} 
					content={faker.lorem.sentence()} 
					variant='column'
				/>
			</div>
		</>
	);
};

export default MapPage;