import { render, screen } from '@testing-library/react';
import Projects from '../page';

describe('Projects Page', () => {
  it('renders the Projects heading', () => {
    render(<Projects />);
    expect(screen.getByText(/Projects/)).toBeInTheDocument();
  });

  it('renders all project cards', () => {
    render(<Projects />);
    expect(screen.getByText('Portfolio Website')).toBeInTheDocument();
    expect(screen.getByText('E-commerce UI')).toBeInTheDocument();
    expect(screen.getByText('Dashboard')).toBeInTheDocument();
  });
});
