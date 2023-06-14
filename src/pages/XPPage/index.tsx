import { Banner, Card, Text } from '../../components';
import data from '../../l10n/pt-br.json';
import IMG1 from '../../assets/images/card-summer-mobile-5.png' ;
import IMG2 from '../../assets/images/card-summer-mobile-4.png' ;
import IMG3 from '../../assets/images/card-summer-mobile-3.png' ;

const XPPage = (): JSX.Element => {
	return (
		<>
			<Banner image='experience'>
				<Text variant='title-1'>{data.contents.headings.experience}</Text>
			</Banner>
			<div className='main-wrapper'>
				<Card 
					image={IMG1}
					title={data.contents.headings.accessibility} 
					content={data.contents.paragraphs.accessibility} 
					variant='column'
				/>
				<Card 
					image={IMG3}
					title={data.contents.headings.sustentability} 
					content={data.contents.paragraphs.sustentability} 
					variant='column'
				/>
				<Card 
					image={IMG2}
					title={data.contents.headings.attractions} 
					content={data.contents.paragraphs.attractions} 
					variant='column'
				/>
			</div>
		</>
	);
};

export default XPPage;