import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import App from './App';

jest.mock('@vercel/analytics/react', () => ({ Analytics: () => null }), { virtual: true });

test('renders the portfolio hero', () => {
  render(<App />);
  expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent('produits digitaux utiles');
});
