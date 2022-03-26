import { css } from '@emotion/react';
import Logo from 'src/assets/logo.svg';

const styles = (bottomLineColor?: string) =>
  css({
    width: '100%',
    height: '100%',
    position: 'relative',
    '& .image-wrap': {
      width: '100%',
      height: 'calc(100% - 3px)',
    },
    img: { objectFit: 'cover' },
    '& .defaultImg': {
      background: 'rgba(9, 53, 123, 0.9)',
      textAlign: 'center',
      img: { height: 'auto', paddingTop: '5rem' },
    },
    '& .text-wrapper': {
      position: 'absolute',
      bottom: '3px',
      background: 'rgba(9, 53, 123, 0.9)',
      padding: '10px',
      width: '100%',
      height: '35%',
      overflow: 'hidden',
      boxSizing: 'border-box',
      header: {
        fontWeight: 700,
        lineHeight: '30px',
        fontSize: '1em',
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
    hr: {
      position: 'relative',
      margin: 0,
      height: '3px',
      background: bottomLineColor ?? '#D32F2F',
      border: 'none',
    },
  });

interface Props {
  imgUrl?: string;
  title: string;
  body?: string;
  bottomLineColor?: string;
}

const Card = ({ imgUrl, title, body, bottomLineColor }: Props): JSX.Element => {
  return (
    <section css={styles(bottomLineColor)}>
      {imgUrl ? (
        <div className="image-wrap">
          <img width="100%" height="100%" src={imgUrl} alt="card" />
        </div>
      ) : (
        <div className="image-wrap defaultImg">
          <img width="60%" height="100%" src={Logo} alt="default" />
        </div>
      )}
      <article className="text-wrapper">
        <header>{title}</header>
        {body && <p dangerouslySetInnerHTML={{ __html: body }}></p>}
      </article>
      <hr></hr>
    </section>
  );
};
export default Card;
