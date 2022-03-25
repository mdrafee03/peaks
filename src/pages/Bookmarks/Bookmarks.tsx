import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Card from 'src/components/Card/Card';
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
    <section>
      <ContentHeader title="All Bookmark" isBookmarkVisible={false} onSelect={selectHandler} />
      {bookmarks.map((bookmark) => (
        <Link
          to={`/article/${encodeURIComponent(bookmark.id)}`}
          className={`card-wrapper`}
          key={bookmark.id}
        >
          <Card title={bookmark.webTitle} body={bookmark.trailText} />
        </Link>
      ))}
    </section>
  );
};
export default Bookmarks;
