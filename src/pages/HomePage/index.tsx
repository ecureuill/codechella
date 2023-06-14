import { Banner, Button, Card, Text } from '../../components';
import data from '../../l10n/pt-br.json';
import IMG1 from '../../assets/images/card-summer-mobile-1.png' ;
import IMG2 from '../../assets/images/card-summer-mobile-2.png' ;
import { MdLocalActivity } from 'react-icons/md';

const HomePage = (): JSX.Element => {
	return (
		<>
			<Banner image='home'>
				<Text variant='title-1'>{data.contents.headings['welcome-to']}  #CodeChella2023</Text>
			</Banner>
			<div className='main-wrapper'>
				<Card 
					image={IMG1}
					title={`${data.contents.headings.evento_data} ${data.contents.headings.evento_local}`} 
					content={data.contents.paragraphs.evento} 
					action={
						<Button size='fill'>{data.controls.btn_buy.action['buy-ticket']}<MdLocalActivity/></Button>
					}
					variant='column'
				/>
				<Text variant='title-2' size='large' className='margin-top-large margin-bottom-big'>/{data.contents.headings['line-up']}/</Text>
				<Text variant='title-3' size='tiny' outlined='outlined' className='margin-bottom-large'>{data.contents.headings.saturday}</Text>
				<Text variant='paragraph' size='largest' className='margin-bottom-small'>System of a DOM</Text>
				<Text variant='paragraph' size='medium' className='flex-column margin-bottom-small'>
					<span>Python Maiden</span> 
					<span>Apollo Client 2001</span>
					<span>Bon Java</span>
					<span>NickCallback</span>
				</Text>
				<Text variant='paragraph' size='small' className='flex-column margin-bottom-small'>
					<span>Linkin Promises</span>
					<span>Fullstack Fighters</span>
					<span>Papa React</span>
					<span>Angular in Chains</span>
				</Text>
				<Text variant='paragraph' size='tiny' className='flex-column margin-bottom-small'>
					<span>Agnostic Front-end</span>
					<span>SlipkNode</span>
					<span>Pink Flutter</span>
					<span>Kiss</span>
				</Text>
				<Text variant='title-3' size='tiny' outlined='outlined' className='margin-bottom-large'>{data.contents.headings.sunday}</Text>
				<Text variant='paragraph' size='largest' className='margin-bottom-small'>Lana Del Ploy</Text>
				<Text variant='paragraph' size='medium' className='flex-column margin-bottom-small'>
					<span>Dua Lib</span>
					<span>The Backnd</span>
					<span>CSS Styles</span>
					<span>ArrayAna Grande</span>
					<span>DJ Query</span>
				</Text>
				<Text variant='paragraph' size='small' className='flex-column margin-bottom-small'>
					<span>Miley Cypress</span>
					<span>The Bootstrap Boys</span>
					<span>Json Derulo</span>
					<span>CloudPlay</span>
					<span>Dev Lovato</span>
				</Text>
				<Text variant='paragraph' size='small' className='flex-column margin-bottom-small'>
					<span>Kylie MiLOG</span>
					<span>Jenkins Brothers</span>
					<span>Rubycat Dolls</span>
				</Text>
			</div>
			<img src={IMG2} alt="" className='bottom-image'/>
		</>
	);
};

export default HomePage;