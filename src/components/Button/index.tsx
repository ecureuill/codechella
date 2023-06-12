import { HTMLAttributes, PropsWithChildren } from 'react';
import './styles.css';

interface ButtonProps extends HTMLAttributes<HTMLButtonElement> {
	variant?: 'icon'
}

const Button = ( {children, variant, ...props}: PropsWithChildren<ButtonProps>): JSX.Element => {
	return (
		<button className={`Button ${variant !== undefined ? `Button--${variant}` : ''}`} {...props} >
			<div className='Button__content'>
				{children}
			</div>
		</button>
	);
};

export default Button;