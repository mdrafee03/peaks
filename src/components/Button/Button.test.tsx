import React from 'react';
import { render } from '@testing-library/react';
import Button from './Button';

describe('Button test', () => {
  const button = render(<Button type="button" onClick={() => 'success'}></Button>);
  expect(button.getByTestId('button')).toBeTruthy();

  it('should equal 4', () => {
    expect(2 + 2).toBe(4);
  });
});
