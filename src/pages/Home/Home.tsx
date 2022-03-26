import { css } from '@emotion/react';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import ContentHeader from 'src/components/ContentHeader/ContentHeader';
import Card from '../../components/Card/Card';
import Loader from '../../components/Loader/Loader';
import CategoryTopArticles from './components/CategoryTopArticles/CategoryTopArticles';
import useTopArticlesQuery from './hooks/useTopArticlesQuery/useTopArticlesQuery';
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
  const { data, isLoading, request } = useTopArticlesQuery();

  useEffect(() => {
    request('newest');
  }, []);

  const handleSelect = (orderBy: string) => {
    request(orderBy);
  };

  return (
    <>
      <ContentHeader title="Top Stories" onSelect={handleSelect} />
      {isLoading && <Loader />}
      {!isLoading && (
        <>
          <div css={styles}>
            {data?.news.map((article, index) => (
              <Link
                to={`/article/${encodeURIComponent(article.id)}`}
                className={`card-wrapper ${index === 0 ? 'first' : ''}`}
                key={article.id}
              >
                <Card title={article.webTitle} body={article?.fields?.trailText} />
              </Link>
            ))}
          </div>
          {data?.sports && (
            <CategoryTopArticles
              data={data.sports}
              title="Sports"
              section="sport"
              styles={styles}
            />
          )}
          {data?.culture && (
            <CategoryTopArticles
              data={data.culture}
              title="Culture"
              section="culture"
              styles={styles}
            />
          )}
          {data?.lifeandstyle && (
            <CategoryTopArticles
              data={data.lifeandstyle}
              title="Life and style"
              section="lifeandstyle"
              styles={styles}
            />
          )}
        </>
      )}
    </>
  );
};

export default Home;
