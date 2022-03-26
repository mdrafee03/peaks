import { css } from '@emotion/react';
import Logo from 'src/assets/logo.svg';
const styles = css({
  width: '100%',
  height: '100%',
  position: 'relative',
  img: { width: '100%', height: '100%', objectFit: 'contain' },
  '& .defaultImg': {
    background: 'rgba(9, 53, 123, 0.9)',
    width: '100%',
    height: '100%',
    textAlign: 'center',
    img: { width: '60%', height: 'auto', paddingTop: '5rem' },
  },
  '& .text-wrapper': {
    position: 'absolute',
    bottom: '0',
    background: 'rgba(9, 53, 123, 0.9)',
    padding: '10px',
    width: '100%',
    boxSizing: 'border-box',
    header: {
      fontWeight: 700,
      lineHeight: '30px',
      fontSize: '24px',
      color: '#fff',
    },
    '& p': {
      fontSize: '14px',
      color: '#fff',
      lineHeight: '20px',
      letterSpacing: '0.1px',
      margin: '0',
      padding: '5px 0',
    },
  },
});

interface Props {
  imgUrl?: string;
  title: string;
  body?: string;
}

const Card = ({ imgUrl, title, body }: Props): JSX.Element => {
  return (
    <section css={styles} className="card-section">
      {imgUrl ? (
        <img width="100%" height="100%" src={imgUrl} alt="card" />
      ) : (
        <div className="defaultImg">
          <img width="100%" height="100%" src={Logo} alt="default" />
        </div>
      )}
      <section className="text-wrapper">
        <header>{title}</header>
        {body && <p dangerouslySetInnerHTML={{ __html: body }}></p>}
      </section>
    </section>
  );
};
export default Card;
