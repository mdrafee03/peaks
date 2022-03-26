import { css } from '@emotion/react';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import BookmarkButton from 'src/components/BookmarkButton/BookmarkButton';
import Loader from 'src/components/Loader/Loader';
import { useBookmarkContext } from 'src/contexts/Bookmark.context';
import { useSnackbarContext } from 'src/contexts/Snackbar.context';
import dateFormatter from 'src/utils/dateFormatter';
import useArticleFetching from './hooks/useArticleFetching/useArticleFetching';

const styles = css({
  '> header': {
    width: '60%',
    '& .title': {
      fontSize: '34px',
      lineHeight: '39px',
      fontWeight: 'bold',
      color: 'rgba(0, 0, 0, 0.87)',
      margin: '10px 0',
    },
    '& .subtitle': {
      fontSize: '20px',
      lineHeight: '26px',
      fontWeight: 'bold',
      letterSpacing: '0.07px',
      margin: '10px 0',
      color: 'rgba(0, 0, 0, 0.87)',
    },
    '& .line': {
      opacity: '0.2',
      border: '1px solid #979797',
    },
  },
  '> main': {
    display: 'flex',
    '& .body': {
      flex: '0 0 60%',
      width: '60%',
      color: 'rgba(0, 0, 0, 0.87)',
      letterSpacing: '0.1px',
      lineHeight: '20px',
      '& a': {
        textDecoration: 'none',
        borderBottom: '1px solid #DCDCDC',
        color: '#C70000',
      },
      '& img': {
        width: '100%',
        height: 'auto',
      }
    },
    '& .figure': {
      '& img': {
        width: '100%',
        height: 'auto',
      },
      '& figcaption': {
        color: 'rgba(0, 0, 0, 0.87)',
        fontFamily: 'Roboto',
        fontSize: '12px',
        lineHeight: '14px',
        letterSpacing: '0.3px',
        opacity: '0.5',
      },
    },
  },
  '& .article-content': {
    display: 'flex',
    '& .body': {
      flex: '1 1 60%',
    },
    '& .main': {
      width: '300px',
    },
  },
});

const Article = (): JSX.Element => {
  const { request, data, isLoading } = useArticleFetching();
  const { checkIfBookmarked, addBookmark, removeBookmark } = useBookmarkContext();
  const { showSuccessMessage, showErrorMessage } = useSnackbarContext();
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
      if (isSuccess) {
        setIsBookmarked(false);
        showErrorMessage('removed from bookmarks'.toUpperCase());
      }
    } else if (!isBookmarked && id && data) {
      const isSuccess = addBookmark({
        id: id,
        webTitle: data.response.content.webTitle,
        trailText: data.response.content?.fields?.trailText,
        webPublicationDate: data.response.content.webPublicationDate,
      });
      if (isSuccess) {
        setIsBookmarked(true);
        showSuccessMessage('saved to bookmarks'.toUpperCase());
      }
    }
  };

  return (
    <>
      {isLoading && <Loader />}
      {data && (
        <article css={styles}>
          <header>
            <BookmarkButton
              text={isBookmarked ? 'Remove Bookmark' : 'Add Bookmark'}
              onClick={handleBookmarkClick}
            />
            <p>{dateFormatter(data.response.content.webPublicationDate)}</p>
            <h1 className="title">{data.response.content.webTitle}</h1>
            {data.response.content?.fields?.trailText && (
              <h4
                className="subtitle"
                dangerouslySetInnerHTML={{
                  __html: data.response.content?.fields?.trailText,
                }}
              />
            )}
            <hr className="line" />
          </header>
          <main>
            {data.response.content.fields?.body && (
              <section
                className="body"
                dangerouslySetInnerHTML={{
                  __html: data.response.content.fields.body,
                }}
              ></section>
            )}
            {data.response.content.fields?.main && (
              <section
                className="figure"
                dangerouslySetInnerHTML={{ __html: data.response.content.fields.main }}
              ></section>
            )}
          </main>
        </article>
      )}
    </>
  );
};
export default Article;
