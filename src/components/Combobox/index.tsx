import { ComponentPropsWithoutRef, useId } from 'react';
import { Text } from '../.';
import './styles.css';

interface ComboboxProps extends ComponentPropsWithoutRef<'input'>{
	label: string,
	options: string[],
	errormessage?: string | undefined
}

const Combobox = ( {label, errormessage, options, ...props}: ComboboxProps): JSX.Element => {
	const id = useId();
	const dlId = useId();

	return (
		<div className='Combobox'>
			<label htmlFor={id} className='Combobox__label'>
				<Text variant='paragraph' size='tiny'>{label}</Text>
			</label>
			<div className='Combobox__field'><input id={id} list={dlId} {...props}/></div>
			<datalist id={dlId} className='Combobox__datalist'>
				{
					options.map(item => 
						<option value={item}/>
					)
				}
			</datalist>
			<span className='Combobox__errortext' role='alert' aria-live='assertive'>
				{errormessage}
			</span>
		</div>
	);
};

export default Combobox;