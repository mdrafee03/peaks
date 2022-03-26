import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import CardList from 'src/components/CardList/CardList';
import ContentHeader from 'src/components/ContentHeader/ContentHeader';
import useInfiniteScroll from 'src/hooks/useInfiniteScroll/useInfiniteScroll';
import useSearchQuery from './hooks/useSearchQuery/useSearchQuery';

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
    request({ searchKey: searchParams.get('q'), orderBy });
  }, [searchParams.get('q'), orderBy]);

  const selectHandler = (orderBy: string) => {
    setOrderBy(orderBy);
  };

  return (
    <>
      <ContentHeader title="Search Result" onSelect={selectHandler} />
      <CardList articles={articles} lastElementRef={lastElementRef} />
    </>
  );
};
export default SearchResult;
