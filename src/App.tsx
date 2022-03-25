import { css, Global, ThemeProvider } from '@emotion/react';
import Topbar from './components/Topbar/Topbar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Home';
import Article from './pages/Article/Article';
import Bookmarks from './pages/Bookmarks/Bookmarks';
import useBookmarkOperations from './hooks/useBookmarkOperations/useBookmarkOperations';
import { BookmarkProvider } from './contexts/Bookmark.context';

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

const App = (): JSX.Element => {
  const bookmark = useBookmarkOperations();

  return (
    <ThemeProvider theme={theme}>
      <Global styles={styles} />
      <BrowserRouter>
        <Topbar />
        <div css={{ margin: '2rem 10rem' }}>
          <BookmarkProvider value={bookmark}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="article/:id" element={<Article />} />
              <Route path="bookmarks" element={<Bookmarks />} />
            </Routes>
          </BookmarkProvider>
        </div>
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default App;
