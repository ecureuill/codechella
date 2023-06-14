import { faker } from '@faker-js/faker/locale/pt_BR';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Context as ResponsiveContext } from 'react-responsive';
import Header from '.';


describe('Header', () => {
	
	const MOBILE_MAX_WIDTH = 480;
	
	it('should render a header', () => {
		render(<Header/>);

		expect(screen.getByRole('banner')).toBeInTheDocument();
	});
	
	describe('on Mobile', () => {
		
		it('should render a button named menu', () => {
			render(
				<ResponsiveContext.Provider value={{ width: faker.number.int({max: MOBILE_MAX_WIDTH}) }}>
					<Header />, 
				</ResponsiveContext.Provider>
			);

			expect(screen.getByRole('button', { name: 'menu'})).toBeInTheDocument();
		});
		
		it('should render a button with description [abrir o menu]', () => {
			render(
				<ResponsiveContext.Provider value={{ width: faker.number.int({max: MOBILE_MAX_WIDTH}) }}>
					<Header />
				</ResponsiveContext.Provider>
			);

			expect(screen.getByRole('button', { description: 'abrir o menu'})).toBeInTheDocument();
		});
		
		it('should render a button with description [fechar o menu] after click on menu button', async () => {
			const user = userEvent.setup();
			
			render(
				<ResponsiveContext.Provider value={{ width: faker.number.int({max: MOBILE_MAX_WIDTH}) }}>
					<Header />
				</ResponsiveContext.Provider>
			);

			const menu = screen.getByRole('button', { name: 'menu' });
			await user.click(menu);

			expect(screen.getByRole('button', { description: 'fechar o menu'})).toBeInTheDocument();
		});
		
		it('should render navigation menu after click on menu button', async () => {
			const user = userEvent.setup();
			
			render(
				<ResponsiveContext.Provider value={{ width: faker.number.int({max: MOBILE_MAX_WIDTH}) }}>
					<Header />
				</ResponsiveContext.Provider>
			);

			const menu = screen.getByRole('button', { name: 'menu' });
			await user.click(menu);

			const nav = await screen.findByRole('navigation');

			expect(nav).toBeInTheDocument();
		});

		it('should render 4 items after click on menu button', async () => {
			const user = userEvent.setup();
			
			render(
				<ResponsiveContext.Provider value={{ width: faker.number.int({max: MOBILE_MAX_WIDTH}) }}>
					<Header />, 
				</ResponsiveContext.Provider>
			);

			const menu = screen.getByRole('button', { name: 'menu' });
			await user.click(menu);

			const menuItems = await screen.findAllByRole('link');
			expect(menuItems).toHaveLength(4);
		});

		it('should render [A experiência] link', async () => {
			const user = userEvent.setup();
			
			render(
				<ResponsiveContext.Provider value={{ width: faker.number.int({max: MOBILE_MAX_WIDTH}) }}>
					<Header />, 
				</ResponsiveContext.Provider>
			);

			const menu = screen.getByRole('button', { name: 'menu' });
			await user.click(menu);

			const menuItems = await screen.findByRole('link', { name: 'A experiência'});
			expect(menuItems).toBeInTheDocument();

		});

		it('should render [Mapa de Setores] link', async () => {
			const user = userEvent.setup();
			
			render(
				<ResponsiveContext.Provider value={{ width: faker.number.int({max: MOBILE_MAX_WIDTH}) }}>
					<Header />, 
				</ResponsiveContext.Provider>
			);

			const menu = screen.getByRole('button', { name: 'menu' });
			await user.click(menu);

			const menuItems = await screen.findByRole('link', { name: 'Mapa de Setores'});
			expect(menuItems).toBeInTheDocument();

		});

		it('should render [Informações] link', async () => {
			const user = userEvent.setup();
			
			render(
				<ResponsiveContext.Provider value={{ width: faker.number.int({max: MOBILE_MAX_WIDTH}) }}>
					<Header />, 
				</ResponsiveContext.Provider>
			);

			const menu = screen.getByRole('button', { name: 'menu' });
			await user.click(menu);

			const menuItems = await screen.findByRole('link', { name: 'Informações'});
			expect(menuItems).toBeInTheDocument();

		});

		it('should render [Ingresso] link', async () => {
			const user = userEvent.setup();
			
			render(
				<ResponsiveContext.Provider value={{ width: faker.number.int({max: MOBILE_MAX_WIDTH}) }}>
					<Header />, 
				</ResponsiveContext.Provider>
			);

			const menu = screen.getByRole('button', { name: 'menu' });
			await user.click(menu);

			const menuItems = await screen.findByRole('link', { name: 'Ingresso'});
			expect(menuItems).toBeInTheDocument();

		});
		
		it('should render a button with description [abrir o menu] after click on menu button 2 times', async () => {
			const user = userEvent.setup();
			
			render(
				<ResponsiveContext.Provider value={{ width: faker.number.int({max: MOBILE_MAX_WIDTH}) }}>
					<Header />
				</ResponsiveContext.Provider>
			);

			const menu = screen.getByRole('button', { name: 'menu' });
			await user.click(menu);

			await user.click(menu);

			expect(screen.getByRole('button', { description: 'abrir o menu'})).toBeInTheDocument();
		});
	});

	// describe('on Desktop', () => {
	// 	const DESKTOP_MIN_WIDTH = 769;
		
	// 	it('should render with navigation menu', () => {
	// 		render(
	// 			<ResponsiveContext.Provider value={{ width: faker.number.int({min: DESKTOP_MIN_WIDTH}) }}>
	// 				<Header />
	// 			</ResponsiveContext.Provider>
	// 		);

	// 		const nav = screen.getByRole('navigation');

	// 		expect(nav).toBeInTheDocument();
	// 	});
		
	// 	it('should render with 4 links in navigation menu', () => {
	// 		render(<Header />);

	// 		const links = screen.getAllByRole('link');

	// 		expect(links).toHaveLength(4);
	// 		expect(links[0]).toContain('A experiência');
	// 		expect(links[1]).toContain('Mapa de Setores');
	// 		expect(links[2]).toContain('Informações');
	// 		expect(links[3]).toContain('Ingresso');
	// 	});

	// });


});