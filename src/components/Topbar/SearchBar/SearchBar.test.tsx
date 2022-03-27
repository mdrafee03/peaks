import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { createMemoryHistory } from 'history';
import { Router } from 'react-router-dom';
import { renderRootProvider } from 'src/utils/RootProviderTest';
import SearchBar from './SearchBar';

describe('Test <SearchBar />', () => {
  it('onchange work correctly', async () => {
    renderRootProvider(<SearchBar />);
    const input = screen.getByPlaceholderText('Search all news');
    userEvent.type(input, 'A');
    expect(input).toHaveValue('A');
  });
});
