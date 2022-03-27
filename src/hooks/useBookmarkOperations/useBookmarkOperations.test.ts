import { renderHook, act } from '@testing-library/react-hooks';
import useBookmarkOperations from './useBookmarkOperations';

test('useBookmarkOperations test', () => {
  const { result } = renderHook(() => useBookmarkOperations());

  //assert initial value
  expect(result.current.bookmarks).toEqual([]);

  // add bookmark
  const bookmark1 = { id: '1', webPublicationDate: 'Mon Mar 28 2022', webTitle: 'testTitle1' };
  act(() => {
    result.current.addBookmark(bookmark1);
  });

  // assert add bookmark state state
  expect(result.current.bookmarks).toEqual([bookmark1]);

  // sort bookmark by newest
  const bookmark2 = {
    id: '2',
    webPublicationDate: 'Mon Mar 29 2022',
    webTitle: 'testTitle2',
  };
  act(() => {
    result.current.addBookmark(bookmark2);
  });
  act(() => {
    result.current.sortBookmarkByDate('newest');
  });

  // assert newest sort bookmark
  expect(result.current.bookmarks).toEqual([bookmark2, bookmark1]);

  // sort bookmark by newest
  act(() => {
    result.current.sortBookmarkByDate('oldest');
  });

  // assert oldest sort bookmark
  expect(result.current.bookmarks).toEqual([bookmark1, bookmark2]);

  // remove bookmark
  act(() => {
    result.current.removeBookmark('2');
  });

  // assert remove bookmark state state
  expect(result.current.bookmarks).toEqual([bookmark1]);
});
