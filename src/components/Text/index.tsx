import './styles.css';

type TextProps = {
	variant?: 'title-1' | 'title-2' | 'title-3' | 'paragraph',
	size?: 'normal' | 'tiny' | 'small' | 'medium' | 'large' | 'largest' | 'big'
	outlined?: 'outlined'
};

const Text = ( {variant='paragraph', size, children, outlined}: TextProps & React.PropsWithChildren): JSX.Element => {
	const styles = `Text ${outlined === undefined? '': `Text--${outlined}`}`;

	switch(variant){
	case 'title-1':
		return (
			<h1 className={`${styles} Text--${size === undefined? 'big': size}`}>
				{children}
			</h1>
		);
	case 'title-2':
		return (
			<h2 className={`${styles} Text--${size === undefined? 'largest': size}`}>
				{children}
			</h2>
		);

	case 'title-3':
		return (
			<h3 className={`${styles} Text--${size === undefined? 'large': size}`}>
				{children}
			</h3>
		);

	case 'paragraph':
	default:	
		return(
			<p className={`${styles} Text--${size === undefined? 'normal': size}`}>
				{children}
			</p>
		);
	}
};

export default Text;