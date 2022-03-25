import { css, Global, ThemeProvider } from '@emotion/react';
import Topbar from './components/Topbar/Topbar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Home';
import Article from './pages/Article/Article';

const theme = {
  colors: {
    primary: 'rgba(9, 53, 123, 1)',
  },
};

const styles = css({
  body: {
    margin: '0',
    fontFamily: "Georgia, 'Times New Roman', Times, serif",
    WebkitFontSmoothing: 'antialiased',
    MozOsxFontSmoothing: 'grayscale',
    boxSizing: 'border-box',
  },
  code: {
    fontFamily:
      "source-code-pro, Menlo, Monaco, Consolas, 'Courier New', monospace",
  },
});

const App = (): JSX.Element => (
  <ThemeProvider theme={theme}>
    <Global styles={styles} />
    <BrowserRouter>
      <Topbar />
      <div css={{ margin: '2rem 10rem' }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="article/:id" element={<Article />} />
        </Routes>
      </div>
    </BrowserRouter>
  </ThemeProvider>
);

export default App;
