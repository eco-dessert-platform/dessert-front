import { dehydrate, HydrationBoundary, QueryClient } from '@tanstack/react-query';
import { myReviewQueryOption } from '@/domains/review/queries/useMyReviewQuery';
import Header from '@/shared/components/Header';
import ReviewList from './_blocks/ReviewList';

const MyReviewPage = async () => {
  const queryClient = new QueryClient();
  const { queryKey, queryFn, initialPageParam } = myReviewQueryOption;
  await queryClient.prefetchInfiniteQuery({
    queryKey,
    queryFn,
    initialPageParam
  });

  return (
    <>
      <Header back title="내가 작성한 리뷰" />
      <HydrationBoundary state={dehydrate(queryClient)}>
        <ReviewList />
      </HydrationBoundary>
    </>
  );
};

export default MyReviewPage;
