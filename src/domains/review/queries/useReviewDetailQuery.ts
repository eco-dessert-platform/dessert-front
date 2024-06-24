import { useQuery } from '@tanstack/react-query';
import reviewService from './service';
import { reviewQueryKey } from './queryKey';

const useReviewDetailQuery = (id: number) =>
  useQuery({
    queryKey: reviewQueryKey.detail(id),
    queryFn: () => reviewService.getReviewDetail(id)
  });

export default useReviewDetailQuery;
