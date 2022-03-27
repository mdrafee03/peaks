import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { renderRootProvider } from 'src/utils/RootProviderTest';
import ContentHeader from './ContentHeader';

describe('content header test', () => {
  const title = 'test';
  const onClick = jest.fn();
  const onSelect = jest.fn();
  beforeEach(() =>
    renderRootProvider(
      <ContentHeader title={title} onclickBookmark={onClick} onSelect={onSelect} />,
    ),
  );

  it('render title correctly', () => {
    expect(screen.getByText(/test/i)).toBeInTheDocument();
  });

  it('onSelect click correctly', () => {
    userEvent.selectOptions(screen.getByRole('combobox'), screen.getAllByRole('option')[0]);
    expect(onSelect).toHaveBeenCalledWith('newest');
  });
});
