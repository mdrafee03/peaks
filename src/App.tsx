import { css, Global, ThemeProvider } from '@emotion/react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MainLayout from './components/MainLayout/MainLayout';
import { BookmarkProvider } from './contexts/Bookmark.context';
import useBookmarkOperations from './hooks/useBookmarkOperations/useBookmarkOperations';
import Article from './pages/Article/Article';
import Bookmarks from './pages/Bookmarks/Bookmarks';
import Home from './pages/Home/Home';
import PageByCategory from './pages/PageByCategory/PageByCategory';
import SearchResult from './pages/SearchResult/SearchResult';

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
    fontFamily: "source-code-pro, Menlo, Monaco, Consolas, 'Courier New', monospace",
  },
});

const App = (): JSX.Element => {
  const bookmark = useBookmarkOperations();

  return (
    <ThemeProvider theme={theme}>
      <Global styles={styles} />
      <BrowserRouter>
        <BookmarkProvider value={bookmark}>
          <Routes>
            <Route path="" element={<MainLayout />}>
              <Route path="" element={<Home />} />
              <Route path="article/:id" element={<Article />} />
              <Route path="bookmarks" element={<Bookmarks />} />
              <Route path="search-result" element={<SearchResult />} />
              <Route path="category/:category" element={<PageByCategory />} />
            </Route>
          </Routes>
        </BookmarkProvider>
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default App;
