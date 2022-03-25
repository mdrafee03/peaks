import { css } from '@emotion/react';
import { Link } from 'react-router-dom';
import Logo from '../../assets/logo.svg';

const topbarCss = `
  background: #09357b;
  padding: 0 7rem;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  img {
    width: 7rem;
    padding: 2rem 0;
  }
`;

const Topbar = (): JSX.Element => {
  return (
    <header
      css={css`
        ${topbarCss}
      `}
    >
      <Link to="/">
        <img src={Logo} alt="logo" />
      </Link>
    </header>
  );
};

export default Topbar;
