import InstaIco from '../../assets/icons/instagram.svg';
import TwitchIco from '../../assets/icons/twitch.svg';
import TwitterIco from '../../assets/icons/twitter.svg';
import WhatsIco from '../../assets/icons/whatsapp.svg';
import LogoSVG from '../../assets/logos/grey.svg';
import data from '../../l10n/pt-br.json';
import Text from '../Text';
import './styles.css';

const Footer = (): JSX.Element => {
	return (
		<footer className='Footer'>
			<img src={LogoSVG} alt=''/>
			<div className='Footer__network'>
				<Text>{data.contents.paragraphs['social-networks']}</Text>
				<div className='Footer__networks'>
					<img src={WhatsIco} alt=''/>
					<img src={TwitchIco} alt=''/>
					<img src={InstaIco} alt=''/>
					<img src={TwitterIco} alt=''/>
				</div>
			</div>
			<Text>{data.contents.paragraphs['developed-by']}</Text>
		</footer>
	);
};

export default Footer;