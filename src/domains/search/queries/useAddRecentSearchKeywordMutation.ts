import { useQueryClient, useMutation } from '@tanstack/react-query';
import fetchExtend from '@/shared/utils/api';
import QUERY_KEY from '@/shared/constants/queryKey';
import { ResultResponse } from '@/shared/types/response';
import { throwApiError } from '@/shared/utils/error';

interface AddRecentSearchKeywordResultType {
  content: string;
}

export const useAddRecentSearchKeywordMutation = () => {
  const queryClient = useQueryClient();

  const mutationFn = async (keyword: string) => {
    const res = await fetchExtend.post(`/search?keyword=${keyword}`);
    const { success, code, message }: ResultResponse<AddRecentSearchKeywordResultType> =
      await res.json();

    if (!res.ok || !success) {
      throwApiError({ code, message });
    }
  };

  const onSuccess = () => {
    queryClient.invalidateQueries({ queryKey: [QUERY_KEY.search, QUERY_KEY.keyword] });
  };

  const onError = (error: Error) => {
    console.error(error.message);
  };

  return useMutation({ mutationFn, onSuccess, onError });
};
