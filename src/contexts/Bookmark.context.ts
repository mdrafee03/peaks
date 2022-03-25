import { createContext, useContext } from 'react';
import Bookmark from 'src/interfaces/Bookmark.interface';
interface BookmarkContextState {
  bookmarks: Bookmark[];
  addBookmark: (article: Bookmark) => boolean;
  removeBookmark: (id: string) => boolean;
  checkIfBookmarked: (id: string) => boolean;
  sortBookmarkByDate: (orderBy?: string) => void;
}

const bookmarkDefaultState: BookmarkContextState = {
  bookmarks: [],
  addBookmark: () => true,
  removeBookmark: () => true,
  checkIfBookmarked: () => true,
  sortBookmarkByDate: () => {},
};
const context = createContext<BookmarkContextState>(bookmarkDefaultState);

const { Provider: BookmarkProvider } = context;
const useBookmarkContext = (): BookmarkContextState => useContext(context);

export { BookmarkProvider, useBookmarkContext };
