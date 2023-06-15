import { useContext } from 'react';
import InstaIcoSummer from '../../assets/icons/summer/instagram.svg';
import TwitchIcoSummer from '../../assets/icons/summer/twitch.svg';
import TwitterIcoSummer from '../../assets/icons/summer/twitter.svg';
import WhatsIcoSummer from '../../assets/icons/summer/whatsapp.svg';
import InstaIcoBoreal from '../../assets/icons/boreal/instagram.svg';
import TwitchIcoBoreal from '../../assets/icons/boreal/twitch.svg';
import TwitterIcoBoreal from '../../assets/icons/boreal/twitter.svg';
import WhatsIcoBoreal from '../../assets/icons/boreal/whatsapp.svg';
import LogoGrey from '../../assets/logos/grey.svg';
import LogoWhite from '../../assets/logos/white.svg';
import { themeContext } from '../../contexts/theme.context';
import data from '../../l10n/pt-br.json';
import Text from '../Text';
import './styles.css';

const Footer = (): JSX.Element => {

	const { isDarkMode } = useContext(themeContext);
	return (
		<footer className='Footer'>
			<img src={isDarkMode? LogoWhite : LogoGrey} alt=''/>
			<div className='Footer__network'>
				<Text>{data.contents.paragraphs['social-networks']}</Text>
				<div className='Footer__networks'>
					<a href='#network'><img src={isDarkMode? WhatsIcoBoreal : WhatsIcoSummer} alt=''/></a>
					<a href='#network'><img src={isDarkMode? TwitchIcoBoreal : TwitchIcoSummer} alt=''/></a>
					<a href='#network'><img src={isDarkMode? InstaIcoBoreal : InstaIcoSummer} alt=''/></a>
					<a href='#network'><img src={isDarkMode? TwitterIcoBoreal : TwitterIcoSummer} alt=''/></a>
				</div>
			</div>
			<Text>{data.contents.paragraphs['developed-by']}</Text>
		</footer>
	);
};

export default Footer;