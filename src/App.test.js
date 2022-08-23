import { render, screen } from '@testing-library/react';
import Exam02_mui from './exam02_mui.js';

test('renders learn react link', () => {
  render(<Exam02_mui />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
