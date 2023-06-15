import { FormEvent, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Banner, Button, Combobox, Input, Icons, Text } from '../../components';
import data from '../../l10n/pt-br.json';

const BuyPage = (): JSX.Element => {

	const navigate = useNavigate();

	const [ isValid, setIsValid ] = useState(false);
	const [ formState, setFormState ] = useState<{
		[key: string]: {value: string, valid: boolean, error?: string},
	}>(
		{
			name: {
				valid: false,
				value: ''
			},
			email: {
				valid: false,
				value: ''
			},
			ticket: {
				valid: false,
				value: ''
			},
			birthday: {
				valid: false,
				value: ''
			}
		}
	);

	const options = [
		data.contents.glossary.pit,
		data.contents.glossary.floor,
		data.contents.glossary.seatA,
		data.contents.glossary.seatB
	];

	const submitHandler = (event: FormEvent<HTMLFormElement>) => {
		event.preventDefault();

		const formData = new FormData(event.currentTarget);
		console.debug(formState);
		console.debug(formData.getAll('ticket'));
		localStorage.setItem('@codechella:ticket', JSON.stringify({
			name: formData.get('name') as string,
			type: formData.get('ticket') as string,
		}));
		navigate('/your-ticket');
	};


	return (
		<>
			<Banner image='buy'>
				<Text variant='title-1'>{data.contents.headings['buy-ticket']}</Text>
			</Banner>
			<div className='main-wrapper'>
				<Text variant='paragraph' size='tiny'>{data.contents.headings.form}</Text>
				<form className='form flex-column center'
					onSubmit={submitHandler}
					onChange={(e) => {
						if(e.target instanceof HTMLInputElement){
							
							const target = e.target as HTMLInputElement;

							if(target.name === 'ticket')
							{
								if(options.includes(target.value)){
									target.setCustomValidity('');
									target.reportValidity();
								}
								else{
									target.setCustomValidity('Select one option from the list');
									target.reportValidity();
								}
							}

							setFormState((prev) => {
								return {
									...prev,
									[target.name]: {
										value: target.value,
										valid: target.validity.valid,
										error: target.validationMessage
									},
								};
							});
						}
						setIsValid(e.currentTarget.checkValidity());

						console.debug(isValid);
						console.debug(formState);
					}
					}
				>
					<Input 
						name='name'
						value={formState['name']?.value}
						required
						aria-required={true}
						errormessage={formState['name']?.error}
						aria-invalid={!formState['name']?.valid}
						label={data.contents.glossary.name}
					/>
					<Input 
						name='email'
						type='email' 
						value={formState['email']?.value}
						required
						aria-required={true}
						aria-errormessage={formState['email']?.error}
						errormessage={formState['email']?.error}
						aria-invalid={!formState['email']?.valid} 
						label={data.contents.glossary.email}
					/>
					<Combobox  
						name='ticket'
						value={formState['ticket']?.value}
						required
						aria-required={true}
						aria-errormessage={formState['ticket']?.error}
						errormessage={formState['ticket']?.error}
						aria-invalid={!formState['ticket']?.valid} 
						label={data.contents.glossary.ticket} 
						options={[
							data.contents.glossary.pit,
							data.contents.glossary.floor,
							data.contents.glossary.seatA,
							data.contents.glossary.seatB
						]}
					/>
					<Input 
						name='date'						 
						type='date' 
						value={formState['date']?.value}
						required
						aria-required={true}
						aria-errormessage={formState['date']?.error}
						errormessage={formState['date']?.error}
						aria-invalid={!formState['date']?.valid} 
						label={data.contents.glossary.birthday} 
					/>
					<Button type='submit' disabled={!isValid}>
						{data.controls.btn_go.action.go}<Icons>arrow_right</Icons>
					</Button>
				</form>
			</div>
		</>
	);
};

export default BuyPage;