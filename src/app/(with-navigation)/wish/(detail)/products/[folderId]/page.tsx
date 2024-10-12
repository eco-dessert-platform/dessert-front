import { HydrationBoundary, QueryClient, dehydrate } from '@tanstack/react-query';
import WishProductSortSelect from '@/domains/wish/components/WishProductSortSelect';
import { wishProductListoptions } from '@/domains/wish/queries/useWishProductListQuery';
import PaddingWrapper from '@/shared/components/PaddingWrapper';
import { wishSortDictionary } from '@/domains/wish/constants';
import TopButton from '@/shared/components/TopButton';
import WishProductList from './_blocks/WishProductList';

interface Props {
  params: { folderId: string };
}

const WishProductsDetail = async ({ params }: Props) => {
  const queryClient = new QueryClient();
  const options = wishProductListoptions({
    folderId: Number(params.folderId),
    sort: wishSortDictionary.translate('담은순')
  });
  await queryClient.prefetchInfiniteQuery({
    queryKey: options.queryKey,
    queryFn: options.queryFn,
    initialPageParam: options.initialPageParam
  });

  return (
    <>
      <PaddingWrapper className="pb-[12px] border-b border-gray-100 flex justify-end">
        <WishProductSortSelect />
      </PaddingWrapper>

      <HydrationBoundary state={dehydrate(queryClient)}>
        <WishProductList />
      </HydrationBoundary>
      <TopButton />
    </>
  );
};

export default WishProductsDetail;
