import { InfiniteData, useMutation, useQueryClient } from '@tanstack/react-query';
import useToastNewVer from '@/shared/hooks/useToastNewVer';
import { reviewQueryKey } from '@/shared/queries/queryKey';
import { updateInfiniteQueryCache } from '@/shared/utils/queryCache';
import { Cursor } from '@/shared/types/response';
import { ReviewType } from '../types/review';
import reviewService from './service';

const useLikeReviewMutation = ({ id, oldLikeCount }: { id: number; oldLikeCount: number }) => {
  const { openToast } = useToastNewVer();
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: () => reviewService.likeReview(id),
    onMutate: () => {
      queryClient.setQueriesData<InfiniteData<Cursor<ReviewType[]>>>(
        { queryKey: reviewQueryKey.lists() },
        (oldData) =>
          // Todo. like: -1 변경 예정, 백엔드 변경 요청 중
          updateInfiniteQueryCache(
            oldData,
            { value: id, key: 'id' },
            { like: oldLikeCount + 1, isLiked: true }
          )
      );
    },
    onError: () => {
      openToast({ message: '도움돼요 실패했어요.' });
    }
  });
};
export default useLikeReviewMutation;
