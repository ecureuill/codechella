import { HTMLAttributes } from 'react';
import './styles.css';

interface TextProps extends HTMLAttributes<HTMLElement> {
	variant?: 'title-1' | 'title-2' | 'title-3' | 'paragraph';
	size?: 'normal' | 'tiny' | 'small' | 'medium' | 'large' | 'largest' | 'big';
	outlined?: 'outlined';
	bold?: true
}

const Text = ( {variant, size, children, outlined, className, bold, ...props}: React.PropsWithChildren<TextProps>): JSX.Element => {
	const styles = `Text ${outlined === undefined? '': `Text--${outlined}`} ${className? className: ''}`;

	switch(variant){
	case 'title-1':
		return (
			<h1 className={`${styles} Text--heading Text--${size === undefined? 'big': size}`} {...props}>
				{children}
			</h1>
		);
	case 'title-2':
		return (
			<h2 className={`${styles} Text--heading Text--${size === undefined? 'largest': size}`} {...props}>
				{children}
			</h2>
		);

	case 'title-3':
		return (
			<h3 className={`${styles} Text--heading Text--${size === undefined? 'large': size}`} {...props}>
				{children}
			</h3>
		);

	case 'paragraph':
		return(
			<p className={`${styles} ${bold !== undefined ? 'Text--bold': ''} Text--${size === undefined? 'normal': size}`} {...props}>
				{children}
			</p>
		);
	default:
		return(
			<span className={`${styles} ${bold !== undefined ? 'Text--bold': ''} Text--${size === undefined? 'normal': size}`} {...props}>
				{children}
			</span>
		);	
	}
};

export default Text;