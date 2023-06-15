import { useNavigate } from 'react-router-dom';
import { Banner, Button, Combobox, Input, Icons, Text } from '../../components';
import data from '../../l10n/pt-br.json';

const BuyPage = (): JSX.Element => {

	const navigate = useNavigate();

	return (
		<>
			<Banner image='buy'>
				<Text variant='title-1'>{data.contents.headings['buy-ticket']}</Text>
			</Banner>
			<div className='main-wrapper'>
				<Text variant='paragraph' size='tiny'>{data.contents.headings.form}</Text>
				<form className='form flex-column'>
					<Input label={data.contents.glossary.name} />
					<Input type='email' label={data.contents.glossary.email} />
					<Combobox 
						label={data.contents.glossary.ticket} 
						list={[
							data.contents.glossary.pit,
							data.contents.glossary.floor,
							data.contents.glossary.seatA,
							data.contents.glossary.seatB
						]}
					/>
					<Input type='date' label={data.contents.glossary.birthday} />
					<Button onClick={() => navigate('/your-ticket')}>
						{data.controls.btn_go.action.go}<Icons>arrow_right</Icons>
					</Button>
				</form>
			</div>
		</>
	);
};

export default BuyPage;