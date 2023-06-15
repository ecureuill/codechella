import { useId, useState } from 'react';
import { Link } from 'react-router-dom';
import { Button, Icons, Mobile, NavBar } from '../.';
import { ReactComponent as LogoSVG } from '../../assets/logos/white.svg';
import useMediaQueries from '../../hooks/useMediaQueries';
import data from '../../l10n/pt-br.json';
import TabletOrAbove from '../MediaQuery/TabletOrAbove';
import ThemeSwitcher from '../ThemeSwitcher';
import './styles.css';

const Header = (): JSX.Element => {

	const [ opened, setOpened ] = useState(false);

	const { isMediumVW } = useMediaQueries();
	const spanId = useId();

	return (
		<header className={`Header ${isMediumVW? 'Header--tablet': ''}`}>
			<TabletOrAbove>
				<ThemeSwitcher />
			</TabletOrAbove>
			<div className={`Header__menu ${isMediumVW? 'Header__menu--mediumVW': ''}`}>
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
						<Icons>menu</Icons>
						<span id={spanId} className='visuallyhidden'>
							{opened? data.controls.btn_menu.description.close : data.controls.btn_menu.description.open}
						</span>
					</Button>
				</Mobile>
				<TabletOrAbove>
					<NavBar />
				</TabletOrAbove>
			</div>
			<Mobile>
				{opened && <NavBar variant='mobile' />}
			</Mobile>
		</header>
	);
};

export default Header;