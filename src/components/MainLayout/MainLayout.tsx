import { Outlet } from 'react-router-dom';
import Footer from '../Footer/Footer';
import Topbar from '../Topbar/Topbar';

const MainLayout = (): JSX.Element => {
  return (
    <>
      <Topbar />
      <div css={{ margin: '2rem 10rem', minHeight: '70vh' }}>
        <Outlet />
      </div>
      <Footer />
    </>
  );
};
export default MainLayout;
