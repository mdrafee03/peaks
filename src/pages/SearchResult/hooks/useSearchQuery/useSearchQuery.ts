import axios from 'axios';
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
const fetcher = async ({
  section = 'news',
  pageSize = 15,
  pageNumber = 1,
  orderBy = 'newest',
  searchKey = '',
}: QueryParams): Promise<GuardianResponse> => {
  const params: Params = {
    section: section,
    page: pageNumber,
    'page-size': pageSize,
    'order-by': orderBy,
    'show-fields': 'trailText',
    'api-key': environment.API_KEY as string,
  };
  if (searchKey) params.q = searchKey;
  const result = await axios.get<GuardianResponse>(`${environment.BASE_URL}/search`, { params });
  return result.data;
};

const useSearchQuery = (section: string) => {
  const [articles, setArticles] = useState<GuardianData[]>([]);
  const [hasMore, setHasMore] = useState(false);
  const { data, request, isLoading, error } = useApi<GuardianResponse, QueryParams>((queryParams) =>
    fetcher({ ...queryParams, section: section }),
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
