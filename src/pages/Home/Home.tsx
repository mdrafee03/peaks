import Card from '../../components/Card/Card';
import Loader from '../../components/Loader/Loader';
import { useEffect } from 'react';
import useTopNewsFetching from './hooks/useTopNewsFetching/useTopNewsFetching';
import { css } from '@emotion/react';
import { Link, useNavigate } from 'react-router-dom';
import ContentHeader from 'src/components/ContentHeader/ContentHeader';
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
  const navigate = useNavigate();
  const { data, isLoading, error, request } = useTopNewsFetching();

  useEffect(() => {
    request('newest');
  }, []);

  const handleBookmarkClick = () => {
    navigate('/bookmarks');
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
          <Link
            to={`/article/${encodeURIComponent(article.id)}`}
            className={`card-wrapper ${index === 0 ? 'first' : ''}`}
            key={article.id}
          >
            <Card title={article.webTitle} body={article.fields.trailText} />
          </Link>
        ))}
      </div>
    </>
  );
};

export default Home;
