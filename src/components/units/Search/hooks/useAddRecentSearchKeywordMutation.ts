import { useQueryClient, useMutation } from '@tanstack/react-query';
import { addRecentSearchKeyword } from '@/components/units/Search/api/addRecentSearchKeyword';

export const useAddRecentSearchKeywordMutation = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: addRecentSearchKeyword,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['recentSearchKeywords'] });
    }
  });
};
