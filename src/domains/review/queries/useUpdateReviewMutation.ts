import { useMutation } from '@tanstack/react-query';
import { useRouter, useSearchParams } from 'next/navigation';
import PATH from '@/shared/constants/path';
import useToastNewVer from '@/shared/hooks/useToastNewVer';
import reviewService from './service';
import { CreatReviewRequest } from '../types/review';

const useUpdateReviewMutation = () => {
  const { push } = useRouter();
  const { openToast } = useToastNewVer();
  const searchParams = useSearchParams();

  return useMutation({
    mutationFn: ({ review, id }: { review: CreatReviewRequest; id: number }) =>
      reviewService.updateReview({ review, id }),

    onSuccess: () => {
      const productId = Number(searchParams.get('productId'));
      push(PATH.reviewList(productId));
      openToast({ message: '리뷰가 작성 되었어요.' });
    },

    onError: () => {
      openToast({ message: '리뷰 작성 실패했어요.' });
    }
  });
};
export default useUpdateReviewMutation;
