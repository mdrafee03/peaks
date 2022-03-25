import axios from "axios";
import environment from "../../../../environment";
import useApi, { ApiResponse } from "../../../../hooks/useApi/useApi";
import GuardianSingle from "../../../../interfaces/GuadianSingle.interface";

const fetcher = async (id: string): Promise<GuardianSingle> => {
  const result = await axios.get<GuardianSingle>(
    `${environment.BASE_URL}/${id}`,
    {
      params: {
        'api-key': environment.API_KEY,
        'show-fields': 'headline,body,trailText'
      }
    }
  );
  return result.data;
}

const useArticleFetching = (): ApiResponse<GuardianSingle, string> => {
  return  useApi<GuardianSingle, string>((id) => fetcher(id))
}

export default useArticleFetching;