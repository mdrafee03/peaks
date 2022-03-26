import { useEffect } from 'react';
import CardList from 'src/components/CardList/CardList';
import ContentHeader from 'src/components/ContentHeader/ContentHeader';
import { useBookmarkContext } from '../../contexts/Bookmark.context';

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
    </>
  );
};
export default Bookmarks;
