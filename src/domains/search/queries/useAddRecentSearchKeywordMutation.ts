import { useQueryClient, useMutation } from '@tanstack/react-query';
import { searchQueryKey, recentKeywordQueryKey } from '@/domains/search/queries/queryKey';
import searchService from '@/domains/search/queries/service';

export const useAddRecentSearchKeywordMutation = () => {
  const queryClient = useQueryClient();
  const queryKey = [...searchQueryKey.all, ...recentKeywordQueryKey.all];

  const mutationFn = async (keyword: string) => {
    await searchService.addRecentSearchKeyword(keyword);
  };

  const onSuccess = () => {
    queryClient.invalidateQueries({ queryKey });
  };

  const onError = (error: Error) => {
    console.error(error.message);
  };

  return useMutation({ mutationFn, onSuccess, onError });
};
