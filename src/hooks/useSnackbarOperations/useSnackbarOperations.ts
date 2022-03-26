import { useState } from 'react';

type SnackbarType = 'success' | 'error';

interface SnackbarState {
  isVisible: boolean;
  type: SnackbarType;
  title: string;
}
const useSnackbarOperations = () => {
  const [snackbar, setSnackbar] = useState<SnackbarState>({
    title: '',
    type: 'success',
    isVisible: false,
  });

  const showSuccessMessage = (title: string) => {
    setSnackbar({ type: 'success', title, isVisible: true });
  };

  const showErrorMessage = (title: string) => {
    setSnackbar({ type: 'error', title, isVisible: true });
  };

  const hideSnackbar = () => {
    setSnackbar({ type: 'success', title: '', isVisible: false });
  };

  return {
    isVisible: snackbar.isVisible,
    type: snackbar.type,
    title: snackbar.title,
    showSuccessMessage,
    showErrorMessage,
    hideSnackbar,
  };
};

export default useSnackbarOperations;
