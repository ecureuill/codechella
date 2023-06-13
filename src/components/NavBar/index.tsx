import Mobile from '../MediaQuery/Mobile';
import './styles.css';

type NavBarProps = {
	variant?: 'mobile' 
}

const NavBar = ({variant}: NavBarProps) => {
	return (

		<nav className={`NavBar ${variant === undefined? '': `NavBar--${variant}` }`}>
			<a href='#experience' className='NavBar__item'>A experiência</a>
			<Mobile>
				<hr className='NavBar__separator'/>
			</Mobile>	
			<a href='#map' className='NavBar__item'>Mapa de Setores</a>
			<Mobile>
				<hr className='NavBar__separator'/>
			</Mobile>
			<a href='#info' className='NavBar__item'>Informações</a>
			<Mobile>
				<hr className='NavBar__separator'/>
			</Mobile>
			<a href='#ticket' className='NavBar__item'>Ingresso</a>
		</nav>
	);
};

export default NavBar;