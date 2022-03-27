import { css } from '@emotion/react';
import { ChangeEvent } from 'react';
import { useNavigate } from 'react-router-dom';
import BookmarkButton from '../BookmarkButton/BookmarkButton';

const styles = css({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  flexWrap: 'wrap',
  margin: '1rem 0',
  '@media (max-width: 576px)': {
    flexDirection: 'column',
  },
  h1: { color: 'rgba(0, 0, 0, 0.87)', size: '3rem', lineHeight: '3rem', margin: 0 },
  '& .right-container': {
    display: 'flex',
    alignItems: 'center',
    '@media (max-width: 768px)': {
      flexDirection: 'column',
    },
  },
  '& .select': {
    outline: 'none',
    border: 'none',
    background: 'none',
    borderBottom: '1px solid black',
    width: '16rem',
    paddingBottom: '8px',
    fontSize: '15px',
    marginLeft: '10px',
  },
});

const bookmarkStyle = css({
  '@media (max-width: 768px)': {
    width: '16rem',
    marginBottom: '10px',
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
        {isBookmarkVisible && (
          <BookmarkButton
            style={bookmarkStyle}
            text="View BookMark"
            onClick={handleBookmarkClick}
          />
        )}
        <select className="select" aria-label="State" onChange={handleSelect}>
          <option value="newest">Newest first</option>
          <option value="oldest">Oldest first</option>
        </select>
      </div>
    </header>
  );
};

export default ContentHeader;
