import { useQueryClient, useMutation } from '@tanstack/react-query';
import { RecentSearchKeywordsType } from '@/components/units/Search/types';
import { deleteRecentSearchKeyword } from '@/components/units/Search/api/deleteRecentSearchKeyword';

export const useDeleteRecentSearchKeywordMutation = () => {
  const queryClient = useQueryClient();
  const queryKey = ['recentSearchKeywords'];

  return useMutation({
    mutationFn: deleteRecentSearchKeyword,
    onMutate: async (keywordToDelete: string) => {
      await queryClient.cancelQueries({ queryKey });
      const previousKeywords = queryClient.getQueryData(queryKey);
      queryClient.setQueryData(queryKey, (oldKeywords: RecentSearchKeywordsType) =>
        oldKeywords.filter(item => item.keyword !== keywordToDelete)
      );

      return { previousKeywords };
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey });
    },
    onError: (_, __, context) => {
      queryClient.setQueryData(queryKey, context?.previousKeywords);
    }
  });
};
