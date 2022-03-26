import { css } from '@emotion/react';
import { useEffect } from 'react';
import CardList from 'src/components/CardList/CardList';
import ContentHeader from 'src/components/ContentHeader/ContentHeader';
import Loader from '../../components/Loader/Loader';
import CategoryTopArticles from './components/CategoryTopArticles/CategoryTopArticles';
import useTopArticlesQuery from './hooks/useTopArticlesQuery/useTopArticlesQuery';
import TopNewsArticles from './TopNewsArticles/TopNewsArticles';
const styles = css({});

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
          {data?.news && <TopNewsArticles articles={data?.news.slice(0, 5)} />}
          {data?.news && <CardList articles={data?.news.slice(5)} />}
          {data?.sports && (
            <CategoryTopArticles data={data.sports} title="Sports" section="sport" />
          )}
          {data?.culture && (
            <CategoryTopArticles data={data.culture} title="Culture" section="culture" />
          )}
          {data?.lifeandstyle && (
            <CategoryTopArticles
              data={data.lifeandstyle}
              title="Life and style"
              section="lifeandstyle"
            />
          )}
        </>
      )}
    </>
  );
};

export default Home;
