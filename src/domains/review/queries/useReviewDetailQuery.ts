import { useQuery } from '@tanstack/react-query';
import { reviewQueryKey } from '@/shared/queries/queryKey';
import reviewService from './service';

export const reviewDetailQueryOptions = (id: number) => ({
  queryKey: reviewQueryKey.detail(id),
  queryFn: () => reviewService.getReviewDetail(id),
  enabled: !!id
});

const useReviewDetailQuery = (id: number) => useQuery(reviewDetailQueryOptions(id));

export default useReviewDetailQuery;
