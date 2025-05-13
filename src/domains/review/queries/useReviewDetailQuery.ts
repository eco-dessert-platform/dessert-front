import { useQuery } from '@tanstack/react-query';
import { reviewQueryKey } from '@/shared/queries/queryKey';
import reviewService from './service';

export const reviewDetailQueryOptions = (reviewId: number) => ({
  queryKey: reviewQueryKey.detail(reviewId),
  queryFn: () => reviewService.getReviewDetail(reviewId),
  enabled: !!reviewId
});

const useReviewDetailQuery = (reviewId: number) => useQuery(reviewDetailQueryOptions(reviewId));

export default useReviewDetailQuery;
