import Header from '@/shared/components/Header';
import { HydrationBoundary, QueryClient, dehydrate } from '@tanstack/react-query';
import { reviewDetailQueryOptions } from '@/domains/review/queries/useReviewDetailQuery';
import ReviewSection from './_blocks/ReviewSection';

interface Props {
  params: { reviewId: string };
}

const ReviewDetailPage = async ({ params: { reviewId } }: Props) => {
  const queryClient = new QueryClient();
  const { queryFn, queryKey } = reviewDetailQueryOptions(Number(reviewId));
  await queryClient.prefetchQuery({
    queryKey,
    queryFn
  });

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <Header title="리뷰 상세" back />
      <ReviewSection reviewId={reviewId} />
    </HydrationBoundary>
  );
};

export default ReviewDetailPage;
