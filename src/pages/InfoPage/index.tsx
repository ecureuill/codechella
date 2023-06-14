import { faker } from '@faker-js/faker';
import { Accordion, Banner, Text } from '../../components';
import data from '../../l10n/pt-br.json';

const InfoPage = (): JSX.Element => {
	return (
		<>
			<Banner image='info'>
				<Text variant='title-1'>{data.contents.headings.information}</Text>
			</Banner>
			<div className='main-wrapper'>
				<Text variant='paragraph' size='tiny'>{data.contents.headings.faq}</Text>
				<Accordion 
					regions={[
						{
							title: `${faker.lorem.sentence({min:3, max: 5})}?`,
							content: faker.lorem.sentences()
						},
						{
							title: `${faker.lorem.sentence({min:3, max: 5})}?`,
							content: faker.lorem.sentences()
						},
						{
							title: `${faker.lorem.sentence({min:3, max: 5})}?`,
							content: faker.lorem.sentences()
						},
						{
							title: `${faker.lorem.sentence({min:3, max: 5})}?`,
							content: faker.lorem.sentences()
						}
					]}
				/>

			</div>
		</>
	);
};

export default InfoPage;