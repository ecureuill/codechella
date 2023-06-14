import Mobile from '../MediaQuery/Mobile';
import { Text } from '../.';
import './styles.css';

type NavBarProps = {
	variant?: 'mobile' 
}

const NavBar = ({variant}: NavBarProps) => {
	return (

		<nav className={`NavBar ${variant === undefined? '': `NavBar--${variant}` }`}>
			<a href='#experience' className='NavBar__item'>
				<Text bold={true}>A experiência</Text>
			</a>
			<Mobile>
				<hr className='NavBar__separator'/>
			</Mobile>	
			<a href='#map' className='NavBar__item'>
				<Text bold={true}>Mapa de Setores</Text>
			</a>
			<Mobile>
				<hr className='NavBar__separator'/>
			</Mobile>
			<a href='#info' className='NavBar__item'>
				<Text bold={true}>Informações</Text>
			</a>
			<Mobile>
				<hr className='NavBar__separator'/>
			</Mobile>
			<a href='#ticket' className='NavBar__item'>
				<Text bold={true}>Ingresso</Text>
			</a>
		</nav>
	);
};

export default NavBar;