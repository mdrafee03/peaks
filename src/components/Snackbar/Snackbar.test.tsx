import { screen } from '@testing-library/react';
import { renderRootProvider } from 'src/utils/RootProviderTest';
import Snackbar from './Snackbar';

describe('Snackbar test', () => {
  const showErrorMessage = jest.fn();
  const hideSnackbar = jest.fn();
  const showSuccessMessage = jest.fn();

  it('show initial title', () => {
    renderRootProvider(<Snackbar />, {
      snackbar: {
        isVisible: true,
        title: 'initial',
        type: 'success',
        showErrorMessage,
        showSuccessMessage,
        hideSnackbar,
      },
    });
    expect(screen.getByText(/initial/i)).toBeInTheDocument();
  });

  it('shows success title', () => {
    renderRootProvider(<Snackbar />, {
      snackbar: {
        isVisible: true,
        title: 'successTitle',
        type: 'success',
        showErrorMessage,
        showSuccessMessage,
        hideSnackbar,
      },
    });
    expect(screen.getByText(/successTitle/i)).toBeInTheDocument();
  });

  it('hide snackbar', () => {
    renderRootProvider(<Snackbar />, {
      snackbar: {
        isVisible: false,
        title: 'successTitle',
        type: 'success',
        showErrorMessage,
        showSuccessMessage,
        hideSnackbar,
      },
    });
    expect(screen.queryByAltText(/successTitle/i)).not.toBeInTheDocument();
  });
});
