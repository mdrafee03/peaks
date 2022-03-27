import { css } from '@emotion/react';
import BookMarkIcon from '../../assets/icons/bookmark.svg';
import Button from '../Button/Button';

const styles = css({
  background: 'rgba(9, 53, 123, 1)',
  color: '#fff',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  border: 'none',
  borderRadius: '4px',
  fontSize: '13px',
  padding: '5px 12px 4px 12px',
  cursor: 'pointer',
  '& img': {
    marginRight: '5px',
  },
  '@media (max-width: 768px)': {
    width: '16rem',
    marginBottom: '10px',
  },
});

interface Props {
  text: string;
  onClick: () => void;
}

const BookmarkButton = ({ text, onClick }: Props): JSX.Element => {
  return (
    <Button customStyles={styles} type="button" onClick={onClick}>
      <img width="20px" height="100%" src={BookMarkIcon} alt="bookmark" />
      <span>{text.toUpperCase()}</span>
    </Button>
  );
};
export default BookmarkButton;
