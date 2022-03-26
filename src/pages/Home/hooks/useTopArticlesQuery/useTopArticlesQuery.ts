import axios from 'axios';
import { useEffect, useState } from 'react';
import environment from 'src/environment';
import useApi from 'src/hooks/useApi/useApi';
import { GuardianResponse } from 'src/interfaces/Guardian.interface';
import TopArticles from '../../interfaces/TopArticles.interface';

const fetcher = async (
  orderBy = 'newest',
  section: string,
  pageSize = 3,
): Promise<GuardianResponse> => {
  const result = await axios.get<GuardianResponse>(`${environment.BASE_URL}/${section}`, {
    params: {
      'order-by': orderBy,
      'api-key': environment.API_KEY,
      'show-fields': 'trailText,main',
      'page-size': pageSize,
      page: 1,
    },
  });
  return result.data;
};
const useTopArticlesQuery = () => {
  const [data, setData] = useState<TopArticles>();
  const [isLoading, setIsLoading] = useState(false);
  const newsApi = useApi<GuardianResponse, string>((orderBy) => fetcher(orderBy, 'news', 8));
  const sportsApi = useApi<GuardianResponse, string>((param) => fetcher(param, 'sport'));
  const cultureApi = useApi<GuardianResponse, string>((param) => fetcher(param, 'culture'));
  const lifeandstyleApi = useApi<GuardianResponse, string>((param) =>
    fetcher(param, 'lifeandstyle'),
  );

  useEffect(() => {
    if (
      newsApi.data?.response.results &&
      sportsApi.data?.response.results &&
      cultureApi.data?.response.results &&
      lifeandstyleApi.data?.response.results
    ) {
      setData({
        news: newsApi.data.response.results,
        sports: sportsApi.data.response.results,
        culture: cultureApi.data?.response.results,
        lifeandstyle: lifeandstyleApi.data?.response.results,
      });
    }
  }, [newsApi.data, sportsApi.data, cultureApi.data, lifeandstyleApi.data]);

  useEffect(() => {
    if (
      newsApi.isLoading ||
      sportsApi.isLoading ||
      cultureApi.isLoading ||
      lifeandstyleApi.isLoading
    ) {
      setIsLoading(true);
    } else {
      setIsLoading(false);
    }
  }, [newsApi.isLoading, sportsApi.isLoading, cultureApi.isLoading, lifeandstyleApi.isLoading]);

  const request = (orderBy: string) => {
    newsApi.request(orderBy);
    sportsApi.request(orderBy);
    cultureApi.request(orderBy);
    lifeandstyleApi.request(orderBy);
  };
  return { request, data, isLoading };
};

export default useTopArticlesQuery;
