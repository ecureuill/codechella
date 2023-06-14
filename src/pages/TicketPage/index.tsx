import { Banner, Text } from '../../components';
import {Ticket} from '../../components/.';
import data from '../../l10n/pt-br.json';

const BuyPage = (): JSX.Element => {

	return (
		<>
			<Banner image='ticket'>
				<Text variant='title-1'>{data.contents.headings.ticket}</Text>
			</Banner>
			<div className='main-wrapper'>
				<Text variant='paragraph' size='tiny'>{data.contents.headings['ticket-fun']}</Text>
				<Ticket />
			</div>
		</>
	);
};

export default BuyPage;