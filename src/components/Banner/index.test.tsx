import { render, screen } from '@testing-library/react';
import Banner from '.';


describe('Banner', () => {

	it('should render a title with “Boas-vindas ao #CodeChella2023”', () => {
		render(
			<Banner image={'home'} >
				Boas-vindas ao #CodeChella2023!
			</Banner>
		);
		
		expect(screen.getByText(/Boas-vindas ao #CodeChella2023!/)).toBeInTheDocument();
	});
	
	it('should render with class Banner', () => {
		render(
			<Banner image={'home'} >
				Boas-vindas ao #CodeChella2023!
			</Banner>
		);

		expect(screen.getByText(/Boas-vindas ao #CodeChella2023!/)).toHaveClass('Banner');
	});
	
	it('should render a div with class Banner__cover--home', () => {
		render(
			<Banner image={'home'} >
				Boas-vindas ao #CodeChella2023!
			</Banner>
		);

		expect(screen.getByText(/Boas-vindas ao #CodeChella2023!/)).toHaveClass('Banner--home');
	});
	
	it('should render a div with class Banner__cover--experience', () => {
		render(
			<Banner image={'experience'} >
				Boas-vindas ao #CodeChella2023!
			</Banner>
		);

		expect(screen.getByText(/Boas-vindas ao #CodeChella2023!/)).toHaveClass('Banner--experience');
	});
});