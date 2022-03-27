import { screen } from '@testing-library/react';
import theme from 'src/config/theme';
import { renderRootProvider } from 'src/utils/RootProviderTest';
import Footer from './Footer';

describe('test Footer', () => {
  renderRootProvider(<Footer />);

  it('render properly', () => {
    expect(screen.getByRole('contentinfo')).toBeInTheDocument();
    expect(screen.getByRole('contentinfo')).toHaveStyle(`background: ${theme.color.primary}`);
  });
});
