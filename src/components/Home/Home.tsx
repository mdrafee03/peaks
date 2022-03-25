import Card from '../Card/Card';
import Loader from '../Loader/Loader';
import { useEffect } from 'react';
import useTopNewsFetching from './hooks/useTopNewsFetching/useTopNewsFetching';
import ContentHeader from '../ContentHeader/ContentHeader';
import { css } from '@emotion/react';
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
  '& .first': {
    flex: '1 1 40%',
  },
});

const Home = (): JSX.Element => {
  const { data, isLoading, error, request } = useTopNewsFetching();

  useEffect(() => {
    request('newest');
  }, []);

  useEffect(() => {
    if (data) {
      console.log(data);
    }
  }, [data]);

  useEffect(() => {
    console.log(isLoading);
  }, [isLoading]);

  const handleBookmarkClick = () => {
    // pass
  };
  const handleSelect = (orderBy: string) => {
    request(orderBy);
  };
  if (error) return <div>Oh! Crap</div>;

  return (
    <>
      <ContentHeader
        title="Top Stories"
        onclickBookmark={handleBookmarkClick}
        onSelect={handleSelect}
      />
      {isLoading && <Loader />}
      <div css={styles} className="cards-container">
        {data?.response.results.map((article, index) => (
          <article className={`card-wrapper ${index === 0 ? 'first' : ''}`} key={article.id}>
            <Card title={article.webTitle} body={article.fields.trailText} />
          </article>
        ))}
      </div>
    </>
  );
};

export default Home;
