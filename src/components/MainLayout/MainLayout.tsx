import React from 'react';
import { css } from '@emotion/react';
import { useLayoutEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Footer from '../Footer/Footer';
import Snackbar from '../Snackbar/Snackbar';
import Topbar from '../Topbar/Topbar';

const styles = css({
  margin: '1rem auto',
  padding: '0 1rem',
  minHeight: '70vh',
  maxWidth: '1100px',
});

const MainLayout = (): JSX.Element => {
  const location = useLocation();

  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <>
      <Topbar />
      <div css={styles}>
        <Outlet />
      </div>
      <Footer />
      <Snackbar />
    </>
  );
};
export default MainLayout;
