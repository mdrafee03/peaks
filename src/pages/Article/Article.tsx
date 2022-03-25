import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import BookmarkButton from 'src/components/BookmarkButton/BookmarkButton';
import Loader from 'src/components/Loader/Loader';
import { useBookmarkContext } from 'src/contexts/Bookmark.context';
import useArticleFetching from './hooks/useArticleFetching/useArticleFetching';

const Article = (): JSX.Element => {
  const { request, data, isLoading } = useArticleFetching();
  const { checkIfBookmarked, addBookmark, removeBookmark } =
    useBookmarkContext();
  const [isBookmarked, setIsBookmarked] = useState<boolean>();
  const { id } = useParams();

  useEffect(() => {
    if (id) {
      request(id);
      setIsBookmarked(checkIfBookmarked(id));
    }
  }, [id]);

  const handleBookmarkClick = () => {
    if (isBookmarked && id) {
      const isSuccess = removeBookmark(id);
      if (isSuccess) setIsBookmarked(false);
    } else if (!isBookmarked && id && data) {
      const isSuccess = addBookmark({
        id: id,
        webTitle: data.response.content.webTitle,
        trailText: data.response.content.fields.trailText,
      });
      if (isSuccess) setIsBookmarked(true);
    }
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
          {/* <figure
            className="element element-image"
          >
            <img
              src="https://media.guim.co.uk/5f3ef258aff263a9540a6675df17f06440b9da06/0_243_6341_3804/1000.jpg"
              alt="Flags at Protest Against Bill Banning Equality Marches In Poland"
              width="1000"
              height="600"
              className="gu-image"
            />
            <figcaption>
              <span className="element-image__caption">
                Flags at a Warsaw protest in 2021 against a proposal to ban
                equality marches. The anti-LGBQT+ climate has resulted in some
                people fleeing to neighbouring countries.
              </span>
              <span className="element-image__credit">
                Photograph: NurPhoto/Rex/Shutterstock
              </span>
            </figcaption>
          </figure> */}
        </article>
      )}
    </>
  );
};
export default Article;
