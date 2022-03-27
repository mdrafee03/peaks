import { css, Theme, useTheme } from '@emotion/react';
import { useEffect } from 'react';
import BookmarkIcon from 'src/assets/icons/bookmark-outline.svg';
import { useSnackbarContext } from 'src/contexts/Snackbar.context';
import React from 'react';

const styles = (theme: Theme, type: string) =>
  css({
    background: type === 'success' ? theme.color.info : theme.color.danger,
    display: 'flex',
    fontFamily: 'Roboto',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'fixed',
    bottom: '0',
    width: '100vw',
    color: '#fff',
    '& p': {
      padding: '10px 10px',
      margin: 0,
    },
  });

const Snackbar = (): JSX.Element => {
  const { isVisible, type, title, hideSnackbar } = useSnackbarContext();
  const theme = useTheme();

  useEffect(() => {
    if (isVisible) {
      const id = setInterval(() => hideSnackbar(), 3000);
      return () => clearInterval(id);
    }
  }, [isVisible]);

  return (
    <>
      {isVisible && (
        <div css={styles(theme, type)}>
          <img src={BookmarkIcon} alt="bookmark" />
          <p>{title}</p>
        </div>
      )}
    </>
  );
};
export default Snackbar;
