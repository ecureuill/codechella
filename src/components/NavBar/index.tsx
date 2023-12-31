import Mobile from '../MediaQuery/Mobile';
import { Text } from '../.';
import './styles.css';
import { Link } from 'react-router-dom';
import ThemeSwitcher from '../ThemeSwitcher';
import useMediaQueries from '../../hooks/useMediaQueries';

type NavBarProps = {
	variant?: 'mobile' 
}

const NavBar = ({variant}: NavBarProps) => {
	const { isMediumVW } = useMediaQueries();

	return (

		<nav className={`NavBar ${variant === undefined? '': `NavBar--${variant}` }`}>
			<Mobile>
				<ThemeSwitcher />
			</Mobile>
			<Link to='/attractions' className='NavBar__item'>
				<Text bold={true}>{isMediumVW? 'Experiência' : 'A experiência'}</Text>
			</Link>
			<Mobile>
				<hr className='NavBar__separator'/>
			</Mobile>
			<Link to={'/map'} className='NavBar__item'>
				<Text bold={true}>{isMediumVW? 'Setores' : 'Mapa de Setores'}</Text>
			</Link>
			<Mobile>
				<hr className='NavBar__separator'/>
			</Mobile>
			<Link to='/info' className='NavBar__item'>
				<Text bold={true}>Informações</Text>
			</Link>
			<Mobile>
				<hr className='NavBar__separator'/>
			</Mobile>
			<Link to='/ticket' className='NavBar__item'>
				<Text bold={true}>Ingresso</Text>
			</Link>
		</nav>
	);
};

export default NavBar;