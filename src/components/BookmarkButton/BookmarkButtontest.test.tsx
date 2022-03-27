import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import BookmarkButton from './BookmarkButton';

describe('Bookmark Button test', () => {
  const title = 'test';
  const onClick = jest.fn();
  beforeEach(() => render(<BookmarkButton text={title} onClick={onClick} />));

  it('render title correctly', () => {
    expect(screen.getByText(/test/i)).toBeInTheDocument();
  });

  it('on Click bookmark correctly', () => {
    userEvent.click(screen.getByRole('button'));
    expect(onClick).toHaveBeenCalled();
  });
});
