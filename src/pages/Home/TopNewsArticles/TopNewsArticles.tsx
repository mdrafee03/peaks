import { css } from '@emotion/react';
import { Link } from 'react-router-dom';
import Card from 'src/components/Card/Card';
import OnlyTitleCard from 'src/components/OnlyTitleCard/OnlyTitleCard';
import { GuardianData } from 'src/interfaces/Guardian.interface';
import findImageSrc from 'src/utils/findImageSrc';

const styles = css({
  display: 'flex',
  '& .top-news': {
    flex: '0 0 49%',
    height: '400px',
    width: '540px',
    fontSize: '24px',
  },
  '& .right-top-section': {
    display: 'flex',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
    fontSize: '18px',
    '& a:nth-of-type(2n)': {
      marginRight: 0,
    },
    '& .right-top-top-news': {
      width: '255px',
      height: '260px',
      flex: '1 1 40%',
    },
    '& .right-top-bottom-news': {
      width: '255px',
      height: '125px',
      flex: '1 1 40%',
    },
  },
  '& a': {
    flex: '1 0 30%',
    margin: '0 15px 15px 0',
    fontSize: '20px',
  },
});

interface Props {
  articles: GuardianData[];
}

const TopNewsArticles = ({ articles }: Props): JSX.Element => {
  return (
    <section css={styles}>
      {articles.slice(0, 1).map((article) =>
        article ? (
          <Link
            to={`/article/${encodeURIComponent(article.id)}`}
            className="top-news"
            key={article.id}
          >
            <Card
              title={article.webTitle}
              imgUrl={findImageSrc(article.fields?.main)}
              body={article?.fields?.trailText}
              bottomLineColor="#388E3C"
            />
          </Link>
        ) : (
          <></>
        ),
      )}
      <section className="right-top-section">
        {articles.slice(1, 3).map((article, index) =>
          article ? (
            <Link
              to={`/article/${encodeURIComponent(article.id)}`}
              className="right-top-top-news"
              key={article.id}
            >
              <Card
                title={article.webTitle}
                imgUrl={findImageSrc(article.fields?.main)}
                bottomLineColor={index === 1 ? '#FFC107' : '#D32F2F'}
              />
            </Link>
          ) : (
            <></>
          ),
        )}
        {articles.slice(3, 5).map((article, index) =>
          article ? (
            <Link
              to={`/article/${encodeURIComponent(article.id)}`}
              className="right-top-bottom-news"
              key={article.id}
            >
              <OnlyTitleCard
                title={article.webTitle}
                bottomLineColor={index === 0 ? '#2196F3' : '#388E3C'}
              />
            </Link>
          ) : (
            <></>
          ),
        )}
      </section>
    </section>
  );
};
export default TopNewsArticles;