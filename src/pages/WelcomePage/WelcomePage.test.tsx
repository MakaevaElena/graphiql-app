import { render, screen } from '@testing-library/react';
import WelcomePage from './WelcomePage';

describe('WelcomePage', () => {
  test('renders welcome message', () => {
    render(<WelcomePage />);
    const welcomeMessage = screen.getByText(/Welcome to GraphiQL/i);
    expect(welcomeMessage).toBeInTheDocument();
  });

  // test('renders developer cards', () => {
  //   render(<WelcomePage />);
  //   const devCards = screen.getAllByTestId('dev');
  //   expect(devCards.length).toBe(3);
  // });

  test('renders Rolling Scopes School logo', () => {
    render(<WelcomePage />);
    const logoImg = screen.getByAltText('Rolling Scopes School Logo');
    expect(logoImg).toBeInTheDocument();
  });
});
