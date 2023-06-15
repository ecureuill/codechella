import { PropsWithChildren } from 'react';
import useMediaQueries from '../../hooks/useMediaQueries';
import './styles.css';

type BannerProps = {
	image: 'home' | 'experience' | 'map' | 'info' | 'buy' | 'ticket'
}

const Banner = ({children, image}: PropsWithChildren<BannerProps>): JSX.Element => {
	const { isTablet, isAboveTablet } = useMediaQueries();
	const screen = isAboveTablet? 'desktop' : isTablet? 'tablet' : 'mobile';

	return (
		<div className={`Banner Banner--${image} Banner--${screen}`}>
			{children}
		</div>
	);
};

export default Banner;