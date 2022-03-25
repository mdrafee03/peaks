import Topbar from 'components/Topbar/Topbar';
import Home from 'pages/Home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

const App = (): JSX.Element => (
  <BrowserRouter>
    <Topbar />
    <Routes>
      <Route path="/" element={<Home />} />
    </Routes>
  </BrowserRouter>
);

export default App;
