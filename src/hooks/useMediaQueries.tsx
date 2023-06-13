import { useMediaQuery as umq } from 'react-responsive';
import MediaQuery from '../utils/enums/MediaQuery';

const useMediaQuery = (query: string): boolean => umq({ query });

const useMediaQueries = () => {
	const isSmallMobile = useMediaQuery(MediaQuery.smallMobileMediaQuery);
	const isMobile = useMediaQuery(MediaQuery.mobileMediaQuery);
	const isTablet = useMediaQuery(MediaQuery.tabletMediaQuery);
	const isLaptop = useMediaQuery(MediaQuery.laptopMediaQuery);
	const isDesktop = useMediaQuery(MediaQuery.desktoMediaQuery);
	const isBigScreen = useMediaQuery(MediaQuery.bigScreenMediaQuery);
	
	const isMobileOrTablet = useMediaQuery(MediaQuery.mobileOrTabletMediaQuery);
	
	const isPortrait = useMediaQuery(MediaQuery.orientationPortrait);
	const isLandscape = useMediaQuery(MediaQuery.orientationLandscape);

	return {
		isSmallMobile,
		isMobile,
		isTablet,
		isLaptop,
		isDesktop,
		isBigScreen,

		isMobileOrTablet,
		
		isPortrait,
		isLandscape
	};
};

export default useMediaQueries;