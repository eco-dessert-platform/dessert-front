import { useInfiniteQuery } from '@tanstack/react-query';
import { INITIAL_CURSOR } from '@/shared/constants/cursor';
import { InfiniteQueryOptions } from '@/shared/types/query';
import { reviewQueryKey } from '@/shared/queries/queryKey';
import reviewService from './service';
import { ReviewType } from '../types/review';

export const reivewQueryOption = (boardId: number): InfiniteQueryOptions<ReviewType[]> => ({
  queryKey: reviewQueryKey.list({ type: 'board', boardId }),
  queryFn: async ({ pageParam }: { pageParam: number }) => {
    const data = await reviewService.getReview({ cursorId: pageParam, boardId });
    return data;
  },
  initialPageParam: INITIAL_CURSOR,
  getNextPageParam: (lastPage) => {
    if (!lastPage.hasNext) return undefined;
    return lastPage.nextCursor + 1;
  },
  select: ({ pages }) => pages.flatMap((page) => page.content)
});

const useReviewQuery = (boardId: number) => useInfiniteQuery(reivewQueryOption(boardId));

export default useReviewQuery;
