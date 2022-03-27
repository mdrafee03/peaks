import { screen } from '@testing-library/react';
import { renderRootProvider } from 'src/utils/RootProviderTest';
import MainLayout from './MainLayout';

describe('MainLayout test', () => {
  renderRootProvider(<MainLayout />);

  it('render properly', () => {
    expect(screen.getByRole('main')).toBeInTheDocument();
  });
});
