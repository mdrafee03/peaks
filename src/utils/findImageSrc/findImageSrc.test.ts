import findImageSrc from './findImageSrc';

describe('Find image source from image tag string', () => {
  const imgUrl = '<img src="https://getImage" alt="image" />';

  it('find image src correctly', () => {
    expect(findImageSrc(imgUrl)).toBe('https://getImage');
  });
});
