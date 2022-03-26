import { css } from '@emotion/react';
import { Outlet } from 'react-router-dom';
import Footer from '../Footer/Footer';
import Snackbar from '../Snackbar/Snackbar';
import Topbar from '../Topbar/Topbar';

const styles = css({
  margin: '2rem auto',
  minHeight: '70vh',
  maxWidth: '1100px',
});

const MainLayout = (): JSX.Element => {
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
