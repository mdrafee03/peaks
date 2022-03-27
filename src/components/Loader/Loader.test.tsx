import { screen } from '@testing-library/react';
import { renderRootProvider } from 'src/utils/RootProviderTest';
import Loader from './Loader';

describe('test Loader', () => {
  renderRootProvider(<Loader />);

  it('render properly', () => {
    expect(screen.getByRole('article')).toBeInTheDocument();
  });
});
