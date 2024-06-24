import Link from 'next/link';
import Image from 'next/image';
import { HydrationBoundary, QueryClient, dehydrate } from '@tanstack/react-query';
import { reivewQueryOption } from '@/domains/review/queries/useReviewQuery';
import PaddingWrapper from '@/shared/components/PaddingWrapper';
import { buttonVariants } from '@/shared/components/ButtonNewver';
import PATH from '@/shared/constants/path';
import ReviewList from './_blocks/ReviewList';
import RatingSection from './_blocks/RatingSection';
import BadgeSection from './_blocks/BadgeSection';
import GaugeSection from './_blocks/GaugeSection';

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
      <PaddingWrapper className="flex flex-col gap-[16px] border-b-[6px] border-gray-100">
        <RatingSection params={params} />
        <BadgeSection params={params} />
        <GaugeSection params={params} />
      </PaddingWrapper>
      <PaddingWrapper className="typo-title-14-semibold">리뷰</PaddingWrapper>
      <PaddingWrapper className="flex flex-col gap-[16px] border-b-[6px] border-gray-100">
        <Link
          className={buttonVariants({ color: 'border-primary', size: 'md', radius: 'round' })}
          href={PATH.reviewCreate({ productId: Number(params.productId), progress: 1 })}
        >
          리뷰 작성
        </Link>
        {bestReview.images && bestReview.images.length > 0 && (
          <div className="flex gap-[4px] w-full h-[200px]">
            {bestReview.images.map(({ id, url }) => (
              <div className="relative w-full h-full">
                <Image key={id} src={url} alt="best review image" fill />
              </div>
            ))}
          </div>
        )}
      </PaddingWrapper>
      <HydrationBoundary state={dehydrate(queryClient)}>
        <ReviewList />
      </HydrationBoundary>
    </>
  );
};

export default ReviewListPage;
