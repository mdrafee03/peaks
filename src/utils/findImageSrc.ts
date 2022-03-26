const findImageSrc = (html?: string) => {
  if (html) {
    const regex = /<img.*?src="(.*?)"/;
    return regex.exec(html)?.[1];
  }
  return '';
};

export default findImageSrc;
