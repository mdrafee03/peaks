import { ThemeProvider } from '@emotion/react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/Home/Home';
import Topbar from './components/Topbar/Topbar';

const theme = {
  colors: {
    primary: 'rgba(9, 53, 123, 1)',
  },
};

const App = (): JSX.Element => (
  <ThemeProvider theme={theme}>
    <BrowserRouter>
      <Topbar />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  </ThemeProvider>
);

export default App;
