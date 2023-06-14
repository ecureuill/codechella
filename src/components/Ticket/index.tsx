import { faker } from '@faker-js/faker/locale/pt_BR';
import { Text } from '../.';
import QRCode from '../../assets/images/qrCode.svg';
import CodeChellaLogo from '../../assets/icons/ticket2.svg';
import CodeLogo from '../../assets/icons/ticket.svg';
import data from '../../l10n/pt-br.json';
import './styles.css';

const Ticket = (): JSX.Element => {
	return (
		<div className='Ticket'>
			<div className='Ticket__header'>
				<img src={CodeChellaLogo} alt='' className='Ticket__logo'/>
				<img src={CodeLogo} alt='' className='Ticket__logo'/>
			</div>
			<img src={QRCode} alt='qr code'/>
			<Text size='small'>{faker.person.fullName()}</Text>
			<Text>{data.contents.glossary.cortesy}</Text>
			<Text>{data.contents.glossary.sector} {data.contents.glossary.floor} </Text>
			<Text>{data.contents.glossary.date} {faker.number.int({ min: 1, max: 30	})}/{faker.date.month({abbreviated: true})}</Text>
			<Text>{data.contents.glossary.place} {faker.address.city()} </Text>

		</div>
	);
};

export default Ticket;