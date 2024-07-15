import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useRouter, useSearchParams } from 'next/navigation';
import PATH from '@/shared/constants/path';
import { reviewQueryKey } from '@/shared/queries/queryKey';
import useToastNewVer from '@/shared/hooks/useToastNewVer';
import { CreatReviewRequest } from '../types/review';
import reviewService from './service';

const useCreateReviewMutation = () => {
  const { push } = useRouter();
  const { openToast } = useToastNewVer();
  const searchParams = useSearchParams();
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (review: CreatReviewRequest) => reviewService.createReview(review),
    onSuccess: () => {
      const productId = Number(searchParams.get('productId'));
      queryClient.invalidateQueries({
        queryKey: reviewQueryKey.list({ boardId: productId, type: 'board' })
      });
      push(PATH.mainProductListReview(productId));
      openToast({ message: '리뷰가 작성 되었어요.' });
    },
    onError: () => {
      openToast({ message: '리뷰 작성 실패했어요.' });
    }
  });
};
export default useCreateReviewMutation;
