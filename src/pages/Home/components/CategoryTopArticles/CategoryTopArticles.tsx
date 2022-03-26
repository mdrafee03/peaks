import { SerializedStyles } from '@emotion/react';
import { Link } from 'react-router-dom';
import Card from 'src/components/Card/Card';
import { GuardianData } from 'src/interfaces/Guardian.interface';

interface Props {
  data: GuardianData[];
  title: string;
  section: string;
  styles: SerializedStyles;
}
const CategoryTopArticles = ({ data, title, section, styles }: Props): JSX.Element => {
  return (
    <>
      <Link to={`/category/${section}`}>
        <h1>{title}</h1>
      </Link>
      <div css={styles}>
        {data.map((article) => (
          <Link
            to={`/article/${encodeURIComponent(article.id)}`}
            className={`card-wrapper`}
            key={article.id}
          >
            <Card title={article.webTitle} body={article?.fields?.trailText} />
          </Link>
        ))}
      </div>
    </>
  );
};
export default CategoryTopArticles;
