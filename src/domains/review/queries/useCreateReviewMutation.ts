import { useMutation } from '@tanstack/react-query';
import reviewService from './service';
import { CreatReviewRequest } from '../types/review';

const useCreateReviewMutation = () =>
  useMutation({
    mutationFn: (review: CreatReviewRequest) => reviewService.createReview(review)
  });

export default useCreateReviewMutation;
