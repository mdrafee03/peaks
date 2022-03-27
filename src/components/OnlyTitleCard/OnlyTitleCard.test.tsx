import { screen } from '@testing-library/react';
import { renderRootProvider } from 'src/utils/RootProviderTest';
import OnlyTitleCard from './OnlyTitleCard';

describe('onlyTestCard test', () => {
  renderRootProvider(<OnlyTitleCard title="test" />);
  it('render property', () => {
    expect(screen.getByText(/test/i)).toBeInTheDocument();
  });
});
