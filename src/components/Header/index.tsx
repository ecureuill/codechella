import { useId, useState } from 'react';
import { MdMenu } from 'react-icons/md';
import { Link } from 'react-router-dom';
import { Button, Mobile, NavBar, Tablet } from '../.';
import { ReactComponent as LogoSVG } from '../../assets/logos/white.svg';
import useMediaQueries from '../../hooks/useMediaQueries';
import data from '../../l10n/pt-br.json';
import ThemeSwitcher from '../ThemeSwitcher';
import './styles.css';

const Header = (): JSX.Element => {

	const [ opened, setOpened ] = useState(false);

	const { isTablet } = useMediaQueries();
	const spanId = useId();

	return (
		<header className='Header'>
			<Tablet>
				<ThemeSwitcher />
			</Tablet>
			<div className={`Header__menu ${isTablet? 'Header__menu--tablet': ''}`}>
				<Link to={'/'}><LogoSVG className='Header__logo--mobile' /></Link>
				<Mobile>
					<Button 
						depth='2d'
						size='tiny'
						shape='icon'
						aria-label='menu'
						aria-describedby={spanId}
						onClick={() => setOpened(!opened)}
					>
						<MdMenu />
						<span id={spanId} className='visuallyhidden'>
							{opened? data.controls.btn_menu.description.close : data.controls.btn_menu.description.open}
						</span>
					</Button>
				</Mobile>
				<Tablet>
					<NavBar />
				</Tablet>
			</div>
			<Mobile>
				{opened && <NavBar variant='mobile' />}
			</Mobile>
		</header>
	);
};

export default Header;