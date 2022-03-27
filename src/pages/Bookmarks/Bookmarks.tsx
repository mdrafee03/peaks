import { css } from '@emotion/react';
import { useEffect } from 'react';
import CardList from 'src/components/CardList/CardList';
import ContentHeader from 'src/components/ContentHeader/ContentHeader';
import { useBookmarkContext } from '../../contexts/Bookmark.context';

const styles = css({
  textAlign: 'center',
  color: 'rgba(0, 0, 0, 0.7)',
});

const Bookmarks = (): JSX.Element => {
  const { sortBookmarkByDate, bookmarks } = useBookmarkContext();

  useEffect(() => {
    sortBookmarkByDate();
  }, []);

  const selectHandler = (orderBy: string) => {
    sortBookmarkByDate(orderBy);
  };

  return (
    <>
      <ContentHeader title="All Bookmark" isBookmarkVisible={false} onSelect={selectHandler} />
      <CardList articles={bookmarks} />
      {bookmarks.length === 0 && <h1 css={styles}>No bookmarked article found</h1>}
    </>
  );
};
export default Bookmarks;
