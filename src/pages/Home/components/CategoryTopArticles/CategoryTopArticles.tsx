import { Link } from 'react-router-dom';
import CardList from 'src/components/CardList/CardList';
import { GuardianData } from 'src/interfaces/Guardian.interface';

interface Props {
  data: GuardianData[];
  title: string;
  section: string;
}
const CategoryTopArticles = ({ data, title, section }: Props): JSX.Element => {
  return (
    <>
      <Link to={`/category/${section}`}>
        <h1>{title}</h1>
      </Link>
      <CardList articles={data} />
    </>
  );
};
export default CategoryTopArticles;
