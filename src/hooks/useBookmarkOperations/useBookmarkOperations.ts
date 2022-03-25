import { useState } from 'react';
import Bookmark from 'src/interfaces/Bookmark.interface';

const useBookmarkOperations = () => {
  const [bookmarks, setBookmarks] = useState<Bookmark[]>([]);

  const addBookmark = (article: Bookmark) => {
    if (bookmarks.some((bookmark) => bookmark.id === article.id)) {
      return false;
    } else {
      setBookmarks([...bookmarks, article]);
      return true;
    }
  };

  const removeBookmark = (id: string) => {
    const index = bookmarks.findIndex((bookmark) => bookmark.id === id);
    if (index !== undefined) {
      setBookmarks([
        ...bookmarks.slice(0, index),
        ...bookmarks.slice(index + 1),
      ]);
      return true;
    } else {
      return false;
    }
  };
  const checkIfBookmarked = (id: string) => {
    return bookmarks.some((bookmark) => bookmark.id === id);
  };
  return { bookmarks, addBookmark, removeBookmark, checkIfBookmarked };
};
export default useBookmarkOperations;
