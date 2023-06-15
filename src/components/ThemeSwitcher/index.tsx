import { useContext } from 'react';
import { themeContext } from '../../contexts/theme.context';
import {Button, Icons} from '../.';

const ThemeSwitcher = (): JSX.Element => {
	const { alternateTheme, isDarkMode } = useContext(themeContext);

	return (
		<Button className='ThemeSwitcher' shape='icon' size='tiny' depth='2d' onClick={() => alternateTheme()} >
			{
				isDarkMode? 
					<Icons>sunny</Icons>
					:
					<Icons>dark_mode</Icons>
			}
		</Button>
	);
};

export default ThemeSwitcher;