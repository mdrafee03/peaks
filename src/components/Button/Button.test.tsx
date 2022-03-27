import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Button from './Button';

describe('Button test', () => {
  const onClick = jest.fn();
  beforeEach(() => {
    render(<Button type="button" onClick={onClick}></Button>);
  });

  it('render correctly', () => {
    expect(screen.getByRole('button')).toBeTruthy();
  });

  it('call on onClick when onClick is triggered', () => {
    const button = screen.getByRole('button');
    userEvent.click(button);
    expect(onClick).toHaveBeenCalled();
  });
  
});
