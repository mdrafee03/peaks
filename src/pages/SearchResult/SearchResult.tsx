import { css } from '@emotion/react';
import { useEffect, useState } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import Card from 'src/components/Card/Card';
import ContentHeader from 'src/components/ContentHeader/ContentHeader';
import Loader from 'src/components/Loader/Loader';
import useInfiniteScroll from 'src/hooks/useInfiniteScroll/useInfiniteScroll';
import useSearchQuery from './hooks/useSearchQuery/useSearchQuery';

const styles = css({
  display: 'flex',
  alignItems: 'flex-start',
  flexWrap: 'wrap',
  '& .card-wrapper': {
    flex: '1 1 30%',
    marginRight: '30px',
    marginBottom: '30px',
    minWidth: '300px',
    height: '350px',
  },
});

const SearchResult = (): JSX.Element => {
  const { request, articles, setArticles, isLoading, hasMore } = useSearchQuery('news');
  const [searchParams] = useSearchParams();
  const [pageNumber, setPageNumber] = useState(1);
  const [orderBy, setOrderBy] = useState('newest');

  const loadMore = () => {
    setPageNumber(pageNumber + 1);
    request({
      searchKey: searchParams.get('q'),
      pageNumber: pageNumber + 1,
      orderBy: orderBy,
    });
  };

  const { lastElementRef } = useInfiniteScroll(isLoading, hasMore, loadMore);

  useEffect(() => {
    setArticles([]);
    request({ searchKey: searchParams.get('q') });
  }, [searchParams.get('q'), orderBy]);

  const selectHandler = (orderBy: string) => {
    setOrderBy(orderBy);
  };

  return (
    <>
      <ContentHeader title="Search Result" onSelect={selectHandler} />
      <section css={styles}>
        {articles.map((article, i) => (
          <Link
            to={`/article/${encodeURIComponent(article.id)}`}
            className={`card-wrapper`}
            key={article.id}
            ref={articles.length === i + 1 ? lastElementRef : null}
          >
            <Card title={article.webTitle} body={article?.fields?.trailText} />
          </Link>
        ))}
        {isLoading && <Loader />}
      </section>
    </>
  );
};
export default SearchResult;
