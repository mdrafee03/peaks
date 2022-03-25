import ContentHeader from 'src/components/ContentHeader/ContentHeader';

const SearchResult = (): JSX.Element => {
  const selectHandler = (orderBy: string) => {};
  return (
    <article>
      <ContentHeader title="Search Result" onSelect={selectHandler} />
    </article>
  );
};
export default SearchResult;
