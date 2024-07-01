import { useMutation } from '@tanstack/react-query';
import { useRouter, useSearchParams } from 'next/navigation';
import PATH from '@/shared/constants/path';
import useToastNewVer from '@/shared/hooks/useToastNewVer';
import { CreatReviewRequest } from '../types/review';
import reviewService from './service';

const useCreateReviewMutation = () => {
  const { push } = useRouter();
  const { openToast } = useToastNewVer();
  const searchParams = useSearchParams();

  return useMutation({
    mutationFn: (review: CreatReviewRequest) => reviewService.createReview(review),
    onSuccess: () => {
      const productId = searchParams.get('productId');
      push(`${PATH.mainProductList}/${productId}/review`);
      openToast({ message: '리뷰가 작성 되었어요.' });
    },
    onError: () => {
      openToast({ message: '리뷰 작성 실패했어요.' });
    }
  });
};
export default useCreateReviewMutation;
