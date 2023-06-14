import { createBrowserRouter } from 'react-router-dom';
import { BuyPage, HomePage, InfoPage, MapPage, TicketPage, XPPage } from '../pages';
import Root from './root';

export const router = createBrowserRouter([
	{
		path: '/',
		element: <Root />,
		children: [
			{
				path: '',
				element: <HomePage />
			},
			{
				path: '/attractions',
				element: <XPPage />
			},
			{
				path: '/map',
				element: <MapPage />
			},
			{
				path: '/info',
				element: <InfoPage />
			},
			{
				path: '/ticket',
				element: <BuyPage />
			},
			{
				path: '/your-ticket',
				element: <TicketPage />
			}
		]
	}
]);