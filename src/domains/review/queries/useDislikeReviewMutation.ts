import { InfiniteData, useMutation, useQueryClient } from '@tanstack/react-query';
import useToastNewVer from '@/shared/hooks/useToastNewVer';
import { Cursor } from '@/shared/types/response';
import { reviewQueryKey } from '@/shared/queries/queryKey';
import { updateInfiniteQueryCache } from '@/shared/utils/queryCache';
import reviewService from './service';
import { ReviewType } from '../types/review';

const useDislikeReviewMutation = (id: number) => {
  const { openToast } = useToastNewVer();
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: () => reviewService.dislikeReview(id),
    onMutate: () => {
      queryClient.setQueriesData<InfiniteData<Cursor<ReviewType[]>>>(
        { queryKey: reviewQueryKey.lists() },
        (oldData) =>
          updateInfiniteQueryCache(oldData, { value: id, key: 'id' }, (oldItem) => ({
            ...oldItem,
            like: oldItem.like - 1,
            isLiked: false
          }))
      );
    },
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: reviewQueryKey.detail(id)
      });
    },
    onError: () => {
      openToast({ message: '도움돼요 해제 실패했어요.' });
      queryClient.resetQueries({ queryKey: reviewQueryKey.lists() });
    }
  });
};
export default useDislikeReviewMutation;
