import { Banner, Card, Text } from '../../components';
import data from '../../l10n/pt-br.json';
import useMediaQueries from '../../hooks/useMediaQueries';

const XPPage = (): JSX.Element => {
	const { isSmallVW, isLargeVW } = useMediaQueries();

	const screen = isLargeVW? 'desktop' : isSmallVW? 'mobile' : 'tablet';
	return (
		<>
			<Banner image='experience'>
				<Text variant='title-1'>{data.contents.headings.experience}</Text>
			</Banner>
			<div className='main-wrapper'>
				<Card 
					image={`/images/${screen}/image-5.png`}
					title={data.contents.headings.accessibility} 
					content={data.contents.paragraphs.accessibility} 
					variant='column'
				/>
				<Card 
					image={`/images/${screen}/image-3.png`}
					title={data.contents.headings.sustentability} 
					content={data.contents.paragraphs.sustentability} 
					variant='column'
				/>
				<Card 
					image={`/images/${screen}/image-4.png`}
					title={data.contents.headings.attractions} 
					content={data.contents.paragraphs.attractions} 
					variant='column'
				/>
			</div>
		</>
	);
};

export default XPPage;