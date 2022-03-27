import { screen } from '@testing-library/react';
import { renderRootProvider } from 'src/utils/RootProviderTest';
import Topbar from './Topbar';

describe('Topbar test', () => {
  renderRootProvider(<Topbar />);
  it('topbar render properly', () => {
    expect(screen.getByRole('img')).toHaveAttribute('alt', 'logo');
  });
});
