import axios from 'axios';
import environment from 'src/environment';
import useApi, { ApiResponse } from 'src/hooks/useApi/useApi';
import { GuardianResponse } from 'src/interfaces/Guardian.interface';

const fetcher = async (orderBy = 'newest'): Promise<GuardianResponse> => {
  const result = await axios.get<GuardianResponse>(`${environment.BASE_URL}/news`, {
    params: {
      'order-by': orderBy,
      'api-key': environment.API_KEY,
      'show-fields': 'trailText',
    },
  });
  return result.data;
};
const useTopNewsFetching = (): ApiResponse<GuardianResponse, string> => {
  return useApi<GuardianResponse, string>((orderBy) => fetcher(orderBy));
};

export default useTopNewsFetching;
