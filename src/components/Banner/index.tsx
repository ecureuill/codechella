import { PropsWithChildren, useId, useState } from 'react';
import { MdMenu } from 'react-icons/md';
import { Button, Mobile, NavBar } from '../.';
import { ReactComponent as LogoSVG } from '../../assets/logos/white.svg';
import data from '../../l10n/pt-br.json';
import './styles.css';

type BannerProps = {
	image: 'home' | 'experience' | 'map' | 'info' | 'ticket'
}

const Banner = ({children, image}: PropsWithChildren<BannerProps>): JSX.Element => {

	const [ opened, setOpened ] = useState(false);

	const spanId = useId();

	return (
		<header className='Banner'>
			<div className='Banner__menu'>
				<Mobile>
					<LogoSVG className='Banner__logo--mobile' />
					<Button 
						variant={'icon'} 
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
			</div>
			<Mobile>
				{opened && <NavBar variant='mobile' />}
			</Mobile>
			<div className={`Banner__cover Banner__cover--${image}`}>
				{children}
			</div>
		</header>
	);
};

export default Banner;