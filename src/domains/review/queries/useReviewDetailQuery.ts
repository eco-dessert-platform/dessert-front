import { useQuery } from '@tanstack/react-query';
import { reviewQueryKey } from '@/shared/queries/queryKey';
import reviewService from './service';

const useReviewDetailQuery = (id: number) =>
  useQuery({
    queryKey: reviewQueryKey.detail(id),
    queryFn: () => reviewService.getReviewDetail(id)
    // enabled: !!id
  });

export default useReviewDetailQuery;
