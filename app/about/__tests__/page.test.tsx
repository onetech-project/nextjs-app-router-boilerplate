import { render, screen } from '@testing-library/react';
import About from '../page';

describe('About Page', () => {
  it('renders the About heading', () => {
    render(<About />);
    expect(screen.getByText(/About Me/)).toBeInTheDocument();
  });

  it('renders all skills', () => {
    render(<About />);
    expect(screen.getByText('🌈 Creative UI/UX')).toBeInTheDocument();
    expect(screen.getByText('⚡ Fast & Responsive')).toBeInTheDocument();
    expect(screen.getByText('🔒 Clean Code')).toBeInTheDocument();
    expect(screen.getByText('🚀 Modern Technologies')).toBeInTheDocument();
  });
});
