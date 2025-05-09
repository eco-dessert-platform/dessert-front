import { useQuery } from '@tanstack/react-query';
import { reviewQueryKey } from '@/shared/queries/queryKey';
import reviewService from './service';

const useGetReviewRatingQuery = (boardId: number) => {
  const queryKey = reviewQueryKey.rating(boardId);
  const queryFn = () => reviewService.getReviewRating(boardId);
  return useQuery({
    queryKey,
    queryFn
  });
};

export default useGetReviewRatingQuery;
