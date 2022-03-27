import { renderHook, act } from '@testing-library/react-hooks';
import useSnackbarOperations from './useSnackbarOperations';

test('useSnackbarOperations', () => {
  const { result } = renderHook(() => useSnackbarOperations());

  //assert initial value
  expect(result.current.isVisible).toBeFalsy();
  expect(result.current.title).toBe('');
  expect(result.current.type).toBe('success');

  // call showSuccessMessage method
  act(() => {
    result.current.showSuccessMessage('successTitle');
  });

  // asset success state
  expect(result.current.isVisible).toBeTruthy();
  expect(result.current.title).toBe('successTitle');
  expect(result.current.type).toBe('success');

  // call showErrorMessage method
  act(() => {
    result.current.showErrorMessage('errorTitle');
  });

  // asset error state
  expect(result.current.isVisible).toBeTruthy();
  expect(result.current.title).toBe('errorTitle');
  expect(result.current.type).toBe('error');

  // call hideSnackbar method
  act(() => {
    result.current.hideSnackbar();
  });

  // asset hide state
  expect(result.current.isVisible).toBeFalsy();
});
