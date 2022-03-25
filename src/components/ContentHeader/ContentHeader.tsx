import { css } from '@emotion/react';
import { ChangeEvent } from 'react';
import { useNavigate } from 'react-router-dom';
import BookmarkButton from '../BookmarkButton/BookmarkButton';

const styles = css({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  '& h1': { color: 'rgba(0, 0, 0, 0.87)', size: '3rem', lineHeight: '3rem' },
  '& .right-container': { display: 'flex', alignItems: 'center' },
  '& .select': {
    outline: 'none',
    border: 'none',
    background: 'none',
    borderBottom: '1px solid black',
    width: '13rem',
    paddingBottom: '8px',
  },
});

interface Props {
  title: string;
  isBookmarkVisible?: boolean;
  onclickBookmark?: () => void;
  onSelect: (orderBy: string) => void;
}

const ContentHeader = ({
  title,
  isBookmarkVisible = true,
  onclickBookmark,
  onSelect,
}: Props): JSX.Element => {
  const navigate = useNavigate();

  const handleBookmarkClick = () => {
    navigate('/bookmarks');
    onclickBookmark?.();
  };

  const handleSelect = (event: ChangeEvent<HTMLSelectElement>) => {
    onSelect(event.target.value);
  };

  return (
    <header css={styles}>
      <h1>{title}</h1>
      <div className="right-container">
        {isBookmarkVisible && <BookmarkButton text="View BookMark" onClick={handleBookmarkClick} />}
        <select className="select" aria-label="State" onChange={handleSelect}>
          <option value="newest">Newest first</option>
          <option value="oldest">Oldest first</option>
        </select>
      </div>
    </header>
  );
};

export default ContentHeader;
