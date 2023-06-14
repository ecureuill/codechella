import { useId, useState } from 'react';
import { MdMenu } from 'react-icons/md';
import { Button, Mobile, NavBar } from '../.';
import { ReactComponent as LogoSVG } from '../../assets/logos/white.svg';
import data from '../../l10n/pt-br.json';
import './styles.css';

const Header = (): JSX.Element => {

	const [ opened, setOpened ] = useState(false);

	const spanId = useId();

	return (
		<header className='Header'>
			<div className='Header__menu'>
				<Mobile>
				</Mobile>
					<LogoSVG className='Header__logo--mobile' />
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
			</div>
			<Mobile>
				{opened && <NavBar variant='mobile' />}
			</Mobile>
		</header>
	);
};

export default Header;