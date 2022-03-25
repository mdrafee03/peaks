import axios from 'axios';
import environment from 'src/environment';
import useApi, { ApiResponse } from 'src/hooks/useApi/useApi';
import GuardianData from 'src/interfaces/Guardian.interface';

const fetcher = async (orderBy = 'newest'): Promise<GuardianData> => {
  const result = await axios.get<GuardianData>(`${environment.BASE_URL}/news`, {
    params: {
      'order-by': orderBy,
      'api-key': environment.API_KEY,
      'show-fields': 'trailText',
    },
  });
  return result.data;
};
const useTopNewsFetching = (): ApiResponse<GuardianData, string> => {
  return useApi<GuardianData, string>((orderBy) => fetcher(orderBy));
};

export default useTopNewsFetching;
