import { PropsWithChildren } from 'react';
import './styles.css';

type BannerProps = {
	image: 'home' | 'experience' | 'map' | 'info' | 'ticket'
}

const Banner = ({children, image}: PropsWithChildren<BannerProps>): JSX.Element => {

	return (
		<div className={`Banner Banner--${image}`}>
			{children}
		</div>
	);
};

export default Banner;