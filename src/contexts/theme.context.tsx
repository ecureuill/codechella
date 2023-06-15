import { createContext, PropsWithChildren, useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';

interface IThemeContext {
	isDarkMode: boolean,
	alternateTheme: () => void
}

export const themeContext = createContext<IThemeContext>({} as IThemeContext);

export const ThemeProvider = ({children}: PropsWithChildren) => {
	const [isDarkMode, setIsDarkmode] = useState(false);
	const theme = isDarkMode ? 'borealTheme' : 'summerTheme';

	const alternateTheme = () => {
		localStorage.setItem('@codechella:theme', JSON.stringify((!isDarkMode)));
		setIsDarkmode(!isDarkMode);
	};

	useEffect(() => {
		const val = localStorage.getItem('@codechella:theme');
		if(val!== null)
			setIsDarkmode(JSON.parse(val));
	}, []); 
	
	return (
		<themeContext.Provider value={{isDarkMode, alternateTheme}}>
			<Helmet>
				<body className={theme}/>
			</Helmet>
			{children}
		</themeContext.Provider>
	);
};

