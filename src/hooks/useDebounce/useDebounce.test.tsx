import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { useState } from 'react';
import useDebounce from './useDebounce';

jest.useFakeTimers();

interface Props {
  delay: number;
}
const TestingComponent = ({ delay }: Props) => {
  const [searchKey, setSearchKey] = useState('');
  const debouncedValue = useDebounce(searchKey, delay);

  return (
    <input
      type="text"
      value={debouncedValue}
      onChange={(e) => setSearchKey(e.target.value)}
      placeholder="testPlaceHolder"
    />
  );
};

it('should update value after specified delay has passed', async () => {
  render(<TestingComponent delay={350} />);
  const input = screen.getByPlaceholderText('testPlaceHolder');
  userEvent.type(input, 'A');
  expect(input).toHaveValue('');
  await waitFor(() => expect(input).toHaveValue('A'), { timeout: 351 });
});
