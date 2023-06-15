import { faker } from '@faker-js/faker/locale/pt_BR';
import { useContext } from 'react';
import { Text } from '../.';
import CodeLogo from '../../assets/icons/ticket.svg';
import CodeChellaGreyLogo from '../../assets/logos/grey.svg';
import CodeChellaWhiteLogo from '../../assets/logos/white.svg';
import QRCode from '../../assets/images/qrCode.svg';
import { themeContext } from '../../contexts/theme.context';
import data from '../../l10n/pt-br.json';
import './styles.css';
import useMediaQueries from '../../hooks/useMediaQueries';

const Ticket = (): JSX.Element => {
	const { isDarkMode } = useContext(themeContext);
	const { isLargeVW } = useMediaQueries();
	const ticket: {
		name: string,
		type: string
	} = JSON.parse(localStorage.getItem('@codechella:ticket')!);
	
	return (
		<div className='Ticket flex-column'>
			<div className='Ticket__header'>
				<img src={isDarkMode? CodeChellaWhiteLogo : CodeChellaGreyLogo} alt='' className='Ticket__logo'/>
				<img src={CodeLogo} alt='' className='Ticket__logo'/>
			</div>
			<div className={`Ticket__content ${isLargeVW? 'flex-row' : 'flex-column'}`}>
				<img src={QRCode} alt='qr code' className={`Ticket__qrCode ${isLargeVW? ' Ticket__qrCode--desktop': ''}`}/>
				<div className='Ticket__data flex-column'>
					<Text size='small' className='Ticket__name'>{ticket.name}</Text>
					<Text>{data.contents.glossary.cortesy}</Text>
					<Text>{data.contents.glossary.sector} {ticket.type} </Text>
					<Text>{data.contents.glossary.date} {faker.number.int({ min: 1, max: 30	})}/{faker.date.month({abbreviated: true})}</Text>
					<Text>{data.contents.glossary.place} {faker.address.city()} </Text>
				</div>
			</div>
		</div>
	);
};

export default Ticket;