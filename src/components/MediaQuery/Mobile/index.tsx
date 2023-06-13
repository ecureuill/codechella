import { PropsWithChildren } from 'react';
import useMediaQueries from '../../../hooks/useMediaQueries';

const Mobile = ({ children } : PropsWithChildren) : JSX.Element =>  {
	const { isMobile } = useMediaQueries();
	
	return (
		<>
			{isMobile && children}
		</>
	);
};

export default Mobile;