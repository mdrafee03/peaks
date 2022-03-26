import { css, Theme } from '@emotion/react';

const styles = (theme: Theme) =>
  css({
    width: '100%',
    height: '120px',
    background: theme.color.primary,
  });
const Footer = () => {
  return <div css={(theme) => styles(theme)}></div>;
};

export default Footer;
