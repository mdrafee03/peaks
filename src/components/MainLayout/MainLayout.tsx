import { Outlet } from 'react-router-dom';
import Topbar from '../Topbar/Topbar';

const MainLayout = (): JSX.Element => {
  return (
    <>
      <Topbar />
      <Outlet />
    </>
  );
};
export default MainLayout;
