import { render, screen } from '@testing-library/react';
import Card from './Card';

describe('Card test', () => {
  const title = 'test';
  beforeEach(() => render(<Card title={title} />));

  it('render title correctly', () => {
    expect(screen.getByText(/test/i)).toBeInTheDocument();
  });
});
