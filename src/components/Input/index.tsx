import { InputHTMLAttributes, useId } from 'react';
import { Text } from '../.';
import './styles.css';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
	label: string
}

const Input = ( {label, ...props}: InputProps): JSX.Element => {
	const id = useId();

	return (
		<div className='Input'>
			<label htmlFor={id} className='Input__label'>
				<Text variant='paragraph' size='tiny'>{label}</Text>
			</label>
			<input id={id} className='Input__field' {...props}/>
			<span className='Input__errortext' role='alert' aria-live='assertive'>
			</span>
		</div>
	);
};

export default Input;