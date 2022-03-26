import axios, { Canceler } from 'axios';
import { useEffect, useState } from 'react';
import environment from 'src/environment';
import useApi from 'src/hooks/useApi/useApi';
import { GuardianData, GuardianResponse } from 'src/interfaces/Guardian.interface';

interface QueryParams {
  pageSize?: number;
  pageNumber?: number;
  orderBy?: string;
  searchKey?: string | null;
  section?: string;
}

interface Params {
  [key: string]: string | number;
}

const CancelToken = axios.CancelToken;
let cancel: Canceler;

const fetcher = async (
  { pageSize = 15, pageNumber = 1, orderBy = 'newest', searchKey = '' }: QueryParams,
  section: string,
): Promise<GuardianResponse> => {
  const params: Params = {
    section: section,
    page: pageNumber,
    'page-size': pageSize,
    'order-by': orderBy,
    'show-fields': 'trailText',
    'api-key': environment.API_KEY as string,
  };
  if (searchKey) params.q = searchKey;
  const result = await axios.get<GuardianResponse>(`${environment.BASE_URL}/search`, {
    params,
    cancelToken: new CancelToken((c) => (cancel = c)),
  });
  cancel();
  return result.data;
};

const useSearchQuery = (section: string) => {
  const [articles, setArticles] = useState<GuardianData[]>([]);
  const [hasMore, setHasMore] = useState(false);
  const { data, request, isLoading, error } = useApi<GuardianResponse, QueryParams>((queryParams) =>
    fetcher(queryParams, section),
  );

  useEffect(() => {
    if (data) {
      setArticles(Array.from(new Set([...articles, ...data.response.results])));
      setHasMore(data.response.pages > data.response.currentPage);
    }
  }, [data]);

  return { request, isLoading, error, articles, setArticles, hasMore };
};

export default useSearchQuery;
