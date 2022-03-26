import { Outlet } from 'react-router-dom';
import Topbar from '../Topbar/Topbar';

const MainLayout = (): JSX.Element => {
  return (
    <>
      <Topbar />
      <div css={{ margin: '2rem 10rem' }}>
        <Outlet />
      </div>
    </>
  );
};
export default MainLayout;
