import { PropsWithChildren } from 'react';
import useMediaQueries from '../../../hooks/useMediaQueries';

const Tablet = ({ children } : PropsWithChildren) : JSX.Element =>  {
	const { isTablet } = useMediaQueries();
	
	return (
		<>
			{isTablet && children}
		</>
	);
};

export default Tablet;