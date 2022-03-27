import { Theme, ThemeProvider } from '@emotion/react';
import { render, RenderOptions, RenderResult } from '@testing-library/react';
import { FC, PropsWithChildren, ReactElement } from 'react';
import { BrowserRouter } from 'react-router-dom';
import theme from 'src/config/theme';
import { BookmarkContextState, BookmarkProvider } from 'src/contexts/Bookmark.context';
import { SnackbarProvider, SnackbarState } from 'src/contexts/Snackbar.context';
import useBookmarkOperations from 'src/hooks/useBookmarkOperations/useBookmarkOperations';
import useSnackbarOperations from 'src/hooks/useSnackbarOperations/useSnackbarOperations';

interface RootProviderProp {
  themeValue: Theme;
  bookmark?: BookmarkContextState;
  snackbar?: SnackbarState;
}

interface Options extends RootProviderProp {
  options?: RenderOptions;
}

export const RootProvider = ({
  themeValue = theme,
  bookmark,
  snackbar,
  children,
}: PropsWithChildren<RootProviderProp>): JSX.Element => {
  const defaultBookmark = useBookmarkOperations();
  const defaultSnackbar = useSnackbarOperations();
  return (
    <ThemeProvider theme={themeValue}>
      <BrowserRouter>
        <SnackbarProvider value={snackbar ?? defaultSnackbar}>
          <BookmarkProvider value={bookmark ?? defaultBookmark}>{children}</BookmarkProvider>
        </SnackbarProvider>
      </BrowserRouter>
    </ThemeProvider>
  );
};

export const renderRootProvider = (
  ui: ReactElement,
  { themeValue, bookmark, snackbar, ...options }: Options = {} as Options,
): RenderResult => {
  const Wrapper: FC = ({ children }) => (
    <RootProvider themeValue={themeValue} bookmark={bookmark} snackbar={snackbar}>
      {children}
    </RootProvider>
  );
  return render(ui, { ...options, wrapper: Wrapper });
};
