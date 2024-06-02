import { useQueryClient, useMutation } from '@tanstack/react-query';
import { SearchKeywordsType } from '@/domains/search/types';
import useToastNewVer from '@/shared/hooks/useToastNewVer';
import searchService from '@/domains/search/queries/service';
import { searchQueryKey, recentKeywordQueryKey } from '@/domains/search/queries/queryKey';

type ContextType = {
  previousKeywords?: SearchKeywordsType;
};

type MutationError = (_error: Error, _variables: string, _context?: ContextType) => void;

export const useDeleteRecentSearchKeywordMutation = () => {
  const { openToast } = useToastNewVer();
  const queryClient = useQueryClient();
  const queryKey = [...searchQueryKey.all, ...recentKeywordQueryKey.all];

  const mutationFn = async (keyword: string) => {
    await searchService.deleteRecentSearchKeyword(keyword);
  };

  const onMutate = async (keywordToDelete: string) => {
    await queryClient.cancelQueries({ queryKey });
    const previousKeywords: SearchKeywordsType | undefined = queryClient.getQueryData(queryKey);
    queryClient.setQueryData(queryKey, (oldKeywords: SearchKeywordsType) =>
      oldKeywords.filter((item) => item.keyword !== keywordToDelete)
    );
    return { previousKeywords };
  };

  const onSuccess = () => {
    queryClient.invalidateQueries({ queryKey });
    openToast({ message: '최근 검색어 삭제에 성공했어요.' });
  };

  const onError: MutationError = (_, __, context) => {
    queryClient.setQueryData(queryKey, context?.previousKeywords);
    openToast({ message: '최근 검색어 삭제에 실패했어요.' });
  };

  return useMutation({ mutationFn, onMutate, onSuccess, onError });
};
