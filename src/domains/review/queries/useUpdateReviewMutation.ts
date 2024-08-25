import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useParams, useRouter } from 'next/navigation';
import PATH from '@/shared/constants/path';
import { reviewQueryKey } from '@/shared/queries/queryKey';
import useToastNewVer from '@/shared/hooks/useToastNewVer';
import reviewService from './service';
import { CreatReviewRequest } from '../types/review';

const useUpdateReviewMutation = () => {
  const { push } = useRouter();
  const { openToast } = useToastNewVer();
  const { productId } = useParams();
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({ review, id }: { review: CreatReviewRequest; id: number }) =>
      reviewService.updateReview({ review, id }),

    onSuccess: () => {
      push(PATH.reviewList(Number(productId)));
      openToast({ message: '리뷰가 작성 되었어요.' });
      queryClient.invalidateQueries({
        queryKey: reviewQueryKey.list({ boardId: Number(productId), type: 'board' })
      });
    },

    onError: () => {
      openToast({ message: '리뷰 작성 실패했어요.' });
    }
  });
};
export default useUpdateReviewMutation;
