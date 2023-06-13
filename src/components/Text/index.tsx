import { HTMLAttributes } from 'react';
import './styles.css';

interface TextProps extends HTMLAttributes<HTMLElement> {
	variant?: 'title-1' | 'title-2' | 'title-3' | 'paragraph';
	size?: 'normal' | 'tiny' | 'small' | 'medium' | 'large' | 'largest' | 'big';
	outlined?: 'outlined';
}

const Text = ( {variant='paragraph', size, children, outlined, className, ...props}: React.PropsWithChildren<TextProps>): JSX.Element => {
	const styles = `Text ${outlined === undefined? '': `Text--${outlined}`} ${className}`;

	switch(variant){
	case 'title-1':
		return (
			<h1 className={`${styles} Text--${size === undefined? 'big': size}`} {...props}>
				{children}
			</h1>
		);
	case 'title-2':
		return (
			<h2 className={`${styles} Text--${size === undefined? 'largest': size}`} {...props}>
				{children}
			</h2>
		);

	case 'title-3':
		return (
			<h3 className={`${styles} Text--${size === undefined? 'large': size}`} {...props}>
				{children}
			</h3>
		);

	case 'paragraph':
	default:	
		return(
			<p className={`${styles} Text--${size === undefined? 'normal': size}`} {...props}>
				{children}
			</p>
		);
	}
};

export default Text;