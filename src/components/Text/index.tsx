import './styles.css';

type TextProps = {
	variant?: 'title-1' | 'title-2' | 'title-3' | 'paragraph',
	size?: 'normal' | 'tiny' | 'small' | 'medium' | 'large' | 'largest' | 'big'

};

const Text = ( {variant='paragraph', size, children}: TextProps & React.PropsWithChildren): JSX.Element => {
	
	switch(variant){
	case 'title-1':
		return (
			<h1 className={`Text Text--${size === undefined? 'big': size}`}>
				{children}
			</h1>
		);
	case 'title-2':
		return (
			<h2 className={`Text Text--${size === undefined? 'largest': size}`}>
				{children}
			</h2>
		);

	case 'title-3':
		return (
			<h3 className={`Text Text--${size === undefined? 'large': size}`}>
				{children}
			</h3>
		);

	case 'paragraph':
	default:	
		return(
			<p className={`Text Text--${size === undefined? 'normal': size}`}>
				{children}
			</p>
		);
	}
};

export default Text;