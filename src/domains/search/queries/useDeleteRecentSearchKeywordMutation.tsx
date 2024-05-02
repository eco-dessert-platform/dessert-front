import { useQueryClient, useMutation } from '@tanstack/react-query';
import { SearchKeywordsType } from '@/domains/search/types';
import fetchExtend from '@/shared/utils/api';
import QUERY_KEY from '@/shared/constants/queryKey';
import useToast from '@/shared/hooks/useToast';
import ToastPop from '@/shared/components/ToastPop';
import { ResultResponse } from '@/shared/types/response';
import { throwApiError } from '@/shared/utils/error';

interface DeleteRecentSearchKeyword {
  content: boolean;
}

type ContextType = {
  previousKeywords?: SearchKeywordsType;
};

type MutationError = (_error: Error, _variables: string, _context?: ContextType) => void;

export const useDeleteRecentSearchKeywordMutation = () => {
  const { openToast } = useToast();

  const queryClient = useQueryClient();
  const queryKey = [QUERY_KEY.search, QUERY_KEY.keyword];

  const mutationFn = async (keyword: string) => {
    const res = await fetchExtend.delete(`/search/recency?keyword=${keyword}`);
    const { success, code, message }: ResultResponse<DeleteRecentSearchKeyword> = await res.json();

    if (!res.ok || !success) {
      throwApiError({ code, message });
    }
  };

  const onMutate = async (keywordToDelete: string): Promise<ContextType> => {
    await queryClient.cancelQueries({ queryKey });
    const previousKeywords: SearchKeywordsType | undefined = queryClient.getQueryData(queryKey);
    queryClient.setQueryData(queryKey, (oldKeywords: SearchKeywordsType) =>
      oldKeywords.filter((item) => item.keyword !== keywordToDelete)
    );
    return { previousKeywords };
  };

  const onSuccess = () => {
    queryClient.invalidateQueries({ queryKey });
    openToast(<ToastPop>최근 검색어 삭제에 성공했어요</ToastPop>);
  };

  const onError: MutationError = (_, __, context) => {
    queryClient.setQueryData(queryKey, context?.previousKeywords);
    openToast(<ToastPop>최근 검색어 삭제에 실패했어요</ToastPop>);
  };

  return useMutation({ mutationFn, onMutate, onSuccess, onError });
};
