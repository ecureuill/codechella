import { useContext } from 'react';
import { MdNightlightRound, MdSunny } from 'react-icons/md';
import { themeContext } from '../../contexts/theme.context';
import Button from '../Button';

const ThemeSwitcher = (): JSX.Element => {
	const { alternateTheme, isDarkMode } = useContext(themeContext);

	return (
		<Button className='ThemeSwitcher' shape='icon' size='tiny' depth='2d' onClick={() => alternateTheme()} >
			{
				isDarkMode? 
					<MdSunny />
					:
					<MdNightlightRound/>
			}
		</Button>
	);
};

export default ThemeSwitcher;