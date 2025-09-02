import { render, screen } from '@testing-library/react';
import RootLayout from '../layout';

describe('RootLayout', () => {
  it('renders navigation links', () => {
    render(<RootLayout><div>Test</div></RootLayout>);
    expect(screen.getByText('Home')).toBeInTheDocument();
    expect(screen.getByText('About')).toBeInTheDocument();
    expect(screen.getByText('Projects')).toBeInTheDocument();
  });

  it('renders children', () => {
    render(<RootLayout><div>Test Child</div></RootLayout>);
    expect(screen.getByText('Test Child')).toBeInTheDocument();
  });
});
