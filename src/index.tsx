//style sheets
import './styles/elements/base.css';
import './styles/generics/normalize.css';
import './styles/settings/settings.css';
import './styles/utilities/utils.css';

import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import { router } from './routers';
import { ThemeProvider } from './contexts/theme.context';

if (process.env['NODE_ENV'] !== 'production') {
	// eslint-disable-next-line @typescript-eslint/no-var-requires
	const axe = require('@axe-core/react');
	axe(React, ReactDOM, 1000);
}

const root = ReactDOM.createRoot(
	document.getElementById('root') as HTMLElement
);


root.render(
	<React.StrictMode>
		<ThemeProvider>
			<RouterProvider router={router} />
		</ThemeProvider>
	</React.StrictMode>
);