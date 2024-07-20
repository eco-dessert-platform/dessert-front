import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useParams } from 'next/navigation';
import { reviewQueryKey } from '@/shared/queries/queryKey';
import useToastNewVer from '@/shared/hooks/useToastNewVer';
import reviewService from './service';

const useDeleteReviewMutation = () => {
  const { openToast } = useToastNewVer();
  const { productId } = useParams();
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (id: number) => reviewService.deleteReview(id),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: reviewQueryKey.list({ boardId: Number(productId), type: 'board' })
      });
      openToast({ message: '리뷰가 삭제 되었어요.' });
    },
    onError: () => {
      openToast({ message: '리뷰 삭제 실패했어요.' });
    }
  });
};
export default useDeleteReviewMutation;
