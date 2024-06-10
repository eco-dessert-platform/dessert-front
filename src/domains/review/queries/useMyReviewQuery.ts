import { useInfiniteQuery } from '@tanstack/react-query';
import { reviewQueryKey } from './queryKey';
import reviewService from './service';

const useMyReviewQuery = () =>
  useInfiniteQuery({
    queryKey: reviewQueryKey.list('mypage'),

    queryFn: async ({ pageParam }: { pageParam: number }) => {
      const data = await reviewService.getMyReview(pageParam);
      return data;
    },

    initialPageParam: -1,

    getNextPageParam: (lastPage) => {
      if (!lastPage.hasNext) return undefined;
      return lastPage.nextCursor + 1;
    },

    select: ({ pages }) => pages.flatMap((page) => page.content)
  });

export default useMyReviewQuery;
