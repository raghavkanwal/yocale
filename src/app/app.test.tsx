import { render } from '@testing-library/react';
import App from './app';
import Header from './components/common/Header';

test('Renders the Nav Bar', () => {
  const { getByText } = render(<Header />);
  const header = getByText(/Tickets/i);
  expect(header).toBeInTheDocument();
});
