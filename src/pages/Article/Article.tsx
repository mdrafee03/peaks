import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Loader from 'src/components/Loader/Loader';
import useArticleFetching from './hooks/useArticleFetching/useArticleFetching';
import BookmarkButton from 'src/components/BookmarkButton/BookmarkButton';

const Article = (): JSX.Element => {
  const { request, data, isLoading } = useArticleFetching();
  const [isBookmarked, setIsBookmarked] = useState<boolean>();
  const { id } = useParams();

  useEffect(() => {
    if (id) {
      request(id);
    }
  }, [id]);

  const handleBookmarkClick = () => {
    console.log('clicked');
  };

  return (
    <>
      {isLoading && <Loader />}
      {data && (
        <article>
          <BookmarkButton
            text={isBookmarked ? 'Remove Bookmark' : 'Add Bookmark'}
            onClick={handleBookmarkClick}
          />
          <p>{data.response.content.webPublicationDate}</p>
          <h1>{data.response.content.webTitle}</h1>
          <h4
            dangerouslySetInnerHTML={{
              __html: data.response.content.fields.trailText,
            }}
          />
          <p
            dangerouslySetInnerHTML={{
              __html: data.response.content.fields.body,
            }}
          ></p>
        </article>
      )}
    </>
  );
};
export default Article;
