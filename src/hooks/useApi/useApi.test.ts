import { waitFor } from '@testing-library/react';
import { renderHook, act } from '@testing-library/react-hooks/dom';
import useApi from './useApi';

interface Response {
  id: string;
}

describe('useApi test', () => {
  it('returns data', async () => {
    const data = { id: 'test' };
    const fetcher = () => {
      return new Promise<Response>((resolve) => {
        setTimeout(() => {
          resolve(data);
        }, 0);
      });
    };

    const { result } = renderHook(() => useApi(fetcher));

    act(() => {
      result.current.request();
    });

    await waitFor(() => expect(result.current.data).toEqual(data));
  });

  it('throws error', async () => {
    const data = { id: 'test' };
    const fetcher = () => {
      return new Promise<Response>((resolve, reject) => {
        setTimeout(() => {
          reject(data);
        }, 0);
      });
    };

    const { result } = renderHook(() => useApi(fetcher));

    act(() => {
      result.current.request();
    });

    await waitFor(() => expect(result.current.error).toEqual(data));
  });

  it('change isLoading state', async () => {
    const data = { id: 'test' };
    const fetcher = () => {
      return new Promise<Response>((resolve) => {
        setTimeout(() => {
          resolve(data);
        }, 0);
      });
    };
    const { result } = renderHook(() => useApi(fetcher));

    act(() => {
      result.current.request();
    });
    expect(result.current.isLoading).toEqual(true);
    await waitFor(() => expect(result.current.isLoading).toEqual(false));
  });
});
