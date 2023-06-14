import { PropsWithChildren, ReactNode } from 'react';
import Text from '../Text';
import './styles.css';

type CardProps = {
	image: string,
	title: string,
	content: string
	action?: ReactNode
	variant?: 'column' | 'row'
};

const Card = ( {image, title, content, action, variant = 'column'}: PropsWithChildren<CardProps>): JSX.Element => {
	return (
		<div className={`Card Card--${variant}`}>
			<img src={image} alt='' className={'Card__cover'} />
			<div className='Card__content'>
				<Text className='Card__title' variant='title-2' size='tiny'>
					{title}
				</Text>
				<Text className='Card__description' variant='paragraph'>
					{content}
				</Text>
				<div className='Card__action'>
					{action}
				</div>
			</div>

		</div>
	);
};

export default Card;