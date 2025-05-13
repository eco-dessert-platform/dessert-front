import { dehydrate, HydrationBoundary, QueryClient } from '@tanstack/react-query';
import reviewService from '@/domains/review/queries/service';
import { INITIAL_CURSOR } from '@/shared/constants/cursor';
import { reviewQueryKey } from '@/shared/queries/queryKey';
import Header from '@/shared/components/Header';
import DefaultLayout from '@/shared/components/DefaultLayout';
import PhotoList from './_blocks/PhotoList';

interface Props {
  params: { productId: string };
}

const ReviewPhotosPage = async ({ params: { productId } }: Props) => {
  const boardId = Number(productId);
  const queryClient = new QueryClient();
  await queryClient.prefetchInfiniteQuery({
    queryKey: [...reviewQueryKey.all, 'photos', { boardId }],
    queryFn: ({ pageParam: cursorId }: { pageParam: number }) =>
      reviewService.getReviewPhotos({ boardId, cursorId }),
    initialPageParam: INITIAL_CURSOR
  });

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <DefaultLayout
        header={<Header title="사진 전체보기" back />}
        main={<PhotoList boardId={boardId} />}
      />
    </HydrationBoundary>
  );
};

export default ReviewPhotosPage;
