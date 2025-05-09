import { useMutation, useQueryClient } from '@tanstack/react-query';
import { reviewQueryKey } from '@/shared/queries/queryKey';
import useToastNewVer from '@/shared/hooks/useToastNewVer';
import reviewService from './service';

const useDeleteReviewMutation = (boardId: number) => {
  const { openToast } = useToastNewVer();
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (id: number) => reviewService.deleteReview(id),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: reviewQueryKey.list({ boardId: Number(boardId), type: 'board' })
      });
      queryClient.invalidateQueries({
        queryKey: reviewQueryKey.list({ type: 'mypage' })
      });
      queryClient.invalidateQueries({
        queryKey: [...reviewQueryKey.all, 'photos', { boardId: Number(boardId) }]
      });
      openToast({ message: '리뷰가 삭제 되었어요.' });
    },
    onError: () => {
      openToast({ message: '리뷰 삭제 실패했어요.' });
    }
  });
};
export default useDeleteReviewMutation;
