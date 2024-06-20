import Image from 'next/image';
import { HydrationBoundary, QueryClient, dehydrate } from '@tanstack/react-query';
import { reivewQueryOption } from '@/domains/review/queries/useReviewQuery';
import PaddingWrapper from '@/shared/components/PaddingWrapper';
import ButtonNewver from '@/shared/components/ButtonNewver';
import ReviewList from './_blocks/ReviewList';

interface Props {
  params: { productId: string };
}

const ReviewListPage = async ({ params }: Props) => {
  const productId = Number(params.productId);
  const queryClient = new QueryClient();
  const { queryKey, queryFn, initialPageParam } = reivewQueryOption(productId);
  const reviews = await queryClient.fetchInfiniteQuery({
    queryKey,
    queryFn,
    initialPageParam
  });

  const bestReview = reviews.pages[0].content[0];

  return (
    <>
      <PaddingWrapper className="typo-title-14-semibold">리뷰</PaddingWrapper>
      <PaddingWrapper className="flex flex-col gap-[16px] border-b-[6px] border-gray-100">
        <ButtonNewver color="border-primary" className="w-full">
          리뷰 작성
        </ButtonNewver>
        <div className="flex gap-[4px] w-full h-[200px]">
          {bestReview.images.map(({ id, url }) => (
            <div className="relative w-full h-full">
              <Image key={id} src={url} alt="reveiw" fill />
            </div>
          ))}
        </div>
      </PaddingWrapper>
      <HydrationBoundary state={dehydrate(queryClient)}>
        <ReviewList />
      </HydrationBoundary>
    </>
  );
};

export default ReviewListPage;
