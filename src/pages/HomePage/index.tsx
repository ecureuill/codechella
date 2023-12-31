import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { Banner, Button, Card, Icons, Text } from '../../components';
import { themeContext } from '../../contexts/theme.context';
import useMediaQueries from '../../hooks/useMediaQueries';
import data from '../../l10n/pt-br.json';

const HomePage = (): JSX.Element => {
	const navigate = useNavigate();
	const { isDarkMode } = useContext(themeContext);
	const { isSmallVW, isLargeVW } = useMediaQueries();

	const theme = isDarkMode? 'boreal' : 'summer';
	const screen = isLargeVW? 'desktop' : isSmallVW? 'mobile' : 'tablet';

	return (
		<>
			<Banner image='home'>
				<Text variant='title-1'>{data.contents.headings['welcome-to']}  #CodeChella2023</Text>
			</Banner>
			<div className='main-wrapper'>
				<Card 
					image={`/images/${screen}/${theme}/image-1.png`}
					title={`${data.contents.headings.evento_data} ${data.contents.headings.evento_local}`} 
					content={data.contents.paragraphs.evento} 
					action={
						<Button size='fill' onClick={() => navigate('/ticket')}>{data.controls.btn_buy.action['buy-ticket']}<Icons>local_activity</Icons>
						</Button>
					}
					variant={isLargeVW? 'row' : 'column'}
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
			<img src={`/images/${screen}/${theme}/image-2.png`}  alt="" className='bottom-image'/>
		</>
	);
};

export default HomePage;