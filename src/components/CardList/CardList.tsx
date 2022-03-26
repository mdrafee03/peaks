import { css } from '@emotion/react';
import { Link } from 'react-router-dom';
import { GuardianData } from 'src/interfaces/Guardian.interface';
import findImageSrc from 'src/utils/findImageSrc';
import Card from '../Card/Card';

const styles = css({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  margin: '0 auto',
  flexWrap: 'wrap',
  '& a': {
    flex: '1 1 calc(33% - 8px)',
    minWidth: '300px',
    maxWidth: '40%',
    margin: '0 15px 15px 0',
    height: '350px',
  },
  '& a:nth-of-type(3n)': {
    marginRight: 0,
  },
});

interface Props {
  articles: GuardianData[];
  lastElementRef?: (node: unknown) => void;
}

const CardList = ({ articles, lastElementRef }: Props): JSX.Element => {
  return (
    <section css={styles}>
      {articles.map((article, i) => (
        <Link
          to={`/article/${encodeURIComponent(article.id)}`}
          className={`card-wrapper`}
          key={article.id}
          ref={articles.length === i + 1 && lastElementRef ? lastElementRef : null}
        >
          <Card
            title={article.webTitle}
            imgUrl={findImageSrc(article.fields?.main)}
            body={article?.fields?.trailText}
          />
        </Link>
      ))}
    </section>
  );
};

export default CardList;
