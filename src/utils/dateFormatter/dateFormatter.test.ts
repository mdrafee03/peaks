import dateFormatter from './dateFormatter';

describe('Format the date', () => {
  const dateString = '2022-03-27T12:00:17Z';

  it('find coverted date correctly', () => {
    expect(dateFormatter(dateString)).toBe('SUN 27 MAR 2022 13.00 BST');
  });
});
