import { HydrationBoundary, QueryClient } from '@tanstack/react-query';
import { reivewQueryOption } from '@/domains/review/queries/useReviewQuery';
import ReviewList from './_blocks/ReviewList';

interface Props {
  params: { productId: string };
}

const ReviewListPage = async ({ params }: Props) => {
  const productId = Number(params.productId);
  const queryClient = new QueryClient();
  const { queryKey, queryFn, initialPageParam } = reivewQueryOption(productId);
  await queryClient.prefetchInfiniteQuery({
    queryKey,
    queryFn,
    initialPageParam
  });

  return (
    <HydrationBoundary>
      <ReviewList />
    </HydrationBoundary>
  );
};

export default ReviewListPage;
