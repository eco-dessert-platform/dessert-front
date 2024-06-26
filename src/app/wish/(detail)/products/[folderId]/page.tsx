import WishProductList from '@/blocks/wish/(detail)/products/[folderId]/WishProductList';
import WishProductSortSelect from '@/domains/wish/components/WishProductSortSelect';
import wishService from '@/domains/wish/queries/service';
import PaddingWrapper from '@/shared/components/PaddingWrapper';
import { INITIAL_CURSOR } from '@/shared/constants/cursor';
import { productQueryKey } from '@/shared/queries/queryKey';
import { HydrationBoundary, QueryClient, dehydrate } from '@tanstack/react-query';

interface Props {
  params: { folderId: string };
}

const WishProductsDetail = async ({ params }: Props) => {
  const queryClient = new QueryClient();
  await queryClient.prefetchInfiniteQuery({
    queryKey: productQueryKey.list('wish'),
    queryFn: ({ pageParam }) =>
      wishService.getWishProductList({
        folderId: Number(params.folderId),
        cursorId: pageParam
      }),
    initialPageParam: INITIAL_CURSOR
  });

  return (
    <>
      <PaddingWrapper className="pb-[12px]">
        <WishProductSortSelect />
      </PaddingWrapper>

      <HydrationBoundary state={dehydrate(queryClient)}>
        <WishProductList />
      </HydrationBoundary>
    </>
  );
};

export default WishProductsDetail;
