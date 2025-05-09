import { useInfiniteQuery, GetNextPageParamFunction } from '@tanstack/react-query';
import { Cursor } from '@/shared/types/response';
import { reviewQueryKey } from '@/shared/queries/queryKey';
import { INITIAL_CURSOR } from '@/shared/constants/cursor';
import reviewService from '@/domains/review/queries/service';
import { ReviewPhoto } from '@/domains/review/types/review';

const useGetReviewPhotosQuery = ({ boardId }: { boardId: number }) => {
  const queryKey = [...reviewQueryKey.all, 'photos', { boardId }];

  const queryFn = async ({ pageParam: cursorId }: { pageParam: number }) => {
    const result = await reviewService.getReviewPhotos({ boardId, cursorId });
    return result;
  };

  const getNextPageParam: GetNextPageParamFunction<number, Cursor<Array<ReviewPhoto>>> = (
    lastPage
  ) => {
    if (!lastPage.hasNext) return undefined;
    return lastPage.nextCursor;
  };

  return useInfiniteQuery({
    queryKey,
    queryFn,
    initialPageParam: INITIAL_CURSOR,
    getNextPageParam,
    select: ({ pages }) => {
      const photos = pages.map((page) => page.content).flat();
      return photos;
    }
  });
};

export default useGetReviewPhotosQuery;
