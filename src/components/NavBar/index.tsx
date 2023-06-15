import Mobile from '../MediaQuery/Mobile';
import { Text } from '../.';
import './styles.css';
import { Link } from 'react-router-dom';
import ThemeSwitcher from '../ThemeSwitcher';

type NavBarProps = {
	variant?: 'mobile' 
}

const NavBar = ({variant}: NavBarProps) => {
	return (

		<nav className={`NavBar ${variant === undefined? '': `NavBar--${variant}` }`}>
			<Mobile>
				<ThemeSwitcher />
			</Mobile>
			<Link to='/attractions' className='NavBar__item'>
				<Text bold={true}>A experiência</Text>
			</Link>
			<Mobile>
				<hr className='NavBar__separator'/>
			</Mobile>
			<Link to={'/map'} className='NavBar__item'>
				<Text bold={true}>Mapa de Setores</Text>
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