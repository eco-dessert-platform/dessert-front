import { useMutation } from '@tanstack/react-query';
import { useParams, useRouter } from 'next/navigation';
import PATH from '@/shared/constants/path';
import useToastNewVer from '@/shared/hooks/useToastNewVer';
import reviewService from './service';
import { CreatReviewRequest } from '../types/review';

const useUpdateReviewMutation = () => {
  const { push } = useRouter();
  const { openToast } = useToastNewVer();
  const { productId } = useParams<{ productId: string }>();

  return useMutation({
    mutationFn: (review: CreatReviewRequest) => reviewService.updateReview(review),
    onSuccess: () => {
      push(PATH.reviewList(Number(productId)));
      openToast({ message: '리뷰가 작성 되었어요.' });
    },
    onError: () => {
      openToast({ message: '리뷰 작성 실패했어요.' });
    }
  });
};
export default useUpdateReviewMutation;
