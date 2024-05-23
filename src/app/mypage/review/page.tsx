import ReviewList from '@/blocks/user/review/ReviewList';
import { reviewQueryKey } from '@/domains/review/queries/queryKey';
import reviewService from '@/domains/review/queries/service';
import Header from '@/shared/components/Header';
import { INITIAL_CORSOR } from '@/shared/constants/corsor';
import { HydrationBoundary, QueryClient, dehydrate } from '@tanstack/react-query';

const MyReviewPage = async () => {
  const queryClinet = new QueryClient();
  await queryClinet.fetchInfiniteQuery({
    queryKey: reviewQueryKey.list('mypage'),
    queryFn: ({ pageParam }) => reviewService.getMyReview(pageParam),
    initialPageParam: INITIAL_CORSOR
  });

  return (
    <>
      <Header back title="내가 작성한 리뷰" />
      <HydrationBoundary state={dehydrate(queryClinet)}>
        <ReviewList />
      </HydrationBoundary>
    </>
  );
};

export default MyReviewPage;
