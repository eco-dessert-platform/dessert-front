import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useParams, useRouter } from 'next/navigation';
import PATH from '@/shared/constants/path';
import { reviewQueryKey } from '@/shared/queries/queryKey';
import useToastNewVer from '@/shared/hooks/useToastNewVer';
import { CreatReviewRequest } from '../types/review';
import reviewService from './service';

const useCreateReviewMutation = () => {
  const { push } = useRouter();
  const { openToast } = useToastNewVer();
  const { productId } = useParams();
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (review: CreatReviewRequest) => reviewService.createReview(review),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: reviewQueryKey.list({ boardId: Number(productId), type: 'board' })
      });
      queryClient.invalidateQueries({
        queryKey: reviewQueryKey.list({ type: 'mypage' })
      });
      queryClient.invalidateQueries({
        queryKey: [...reviewQueryKey.all, 'photos', { boardId: Number(productId) }]
      });
      push(PATH.mainProductListReview(Number(productId)));
      openToast({ message: '리뷰가 작성 되었어요.' });
    },
    onError: () => {
      openToast({ message: '리뷰 작성 실패했어요.' });
    }
  });
};
export default useCreateReviewMutation;
