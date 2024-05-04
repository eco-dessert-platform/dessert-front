import { useQuery } from '@tanstack/react-query';
import fetchExtend from '@/shared/utils/api';
import QUERY_KEY from '@/shared/constants/queryKey';
import { ResultResponse } from '@/shared/types/response';
import { throwApiError } from '@/shared/utils/error';

interface AutoCompleteResultType {
  content: Array<string>;
}

export const useGetAutoCompleteSearchTextsQuery = (keyword: string) => {
  const queryKey = [QUERY_KEY.search, QUERY_KEY.autoComplete, { keyword }];

  const queryFn = async () => {
    if (!keyword) return [];

    const res = await fetchExtend.get(`/search/auto-keyword?keyword=${keyword}`);
    const { success, code, message, result }: ResultResponse<AutoCompleteResultType> =
      await res.json();

    if (!res.ok || !success) {
      throwApiError({ code, message });
    }

    return result.content;
  };

  return useQuery({
    queryKey,
    queryFn,
    refetchOnMount: false,
    refetchOnWindowFocus: false,
    refetchOnReconnect: false,
    staleTime: Infinity
  });
};
