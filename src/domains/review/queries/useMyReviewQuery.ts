import { useInfiniteQuery } from '@tanstack/react-query';
import { reviewQueryKey } from '@/shared/queries/queryKey';
import { INITIAL_CURSOR } from '@/shared/constants/cursor';
import { InfiniteQueryOptions } from '@/shared/types/query';
import reviewService from './service';
import { ReviewType } from '../types/review';

export const myReviewQueryOption: InfiniteQueryOptions<ReviewType[]> = {
  queryKey: reviewQueryKey.list({ type: 'mypage' }),

  queryFn: async ({ pageParam }: { pageParam: number }) => {
    const data = await reviewService.getMyReview(pageParam);
    return data;
  },

  initialPageParam: INITIAL_CURSOR,

  getNextPageParam: (lastPage) => {
    if (!lastPage.hasNext) return undefined;
    return lastPage.nextCursor + 1;
  },

  select: ({ pages }) => pages.flatMap((page) => page.content)
};

const useMyReviewQuery = () => useInfiniteQuery(myReviewQueryOption);
export default useMyReviewQuery;
