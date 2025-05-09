import MainProductList from '@/blocks/main/(list)/MainProductList';
import SortingFilterSection from '@/blocks/main/(list)/SortingFilterSection';
import CategoryTab from '@/domains/product/components/CategoryTab';
import { FILTER_FAMILY_ID } from '@/domains/product/constants/filterFamilyID';
import { INIT_FILTER_VALUE } from '@/domains/product/constants/filterValues';
import productService from '@/domains/product/queries/service';
import { INITIAL_CURSOR } from '@/shared/constants/cursor';
import { productQueryKey } from '@/shared/queries/queryKey';
import { dehydrate, HydrationBoundary, QueryClient } from '@tanstack/react-query';
import TopButton from '@/shared/components/TopButton';

const ProductListPage = async () => {
  const queryClient = new QueryClient();
  await queryClient.prefetchInfiniteQuery({
    queryKey: [...productQueryKey.lists(), { filter: INIT_FILTER_VALUE }],
    queryFn: async ({ pageParam: cursorId }: { pageParam: number }) => {
      const result = await productService.getAllCategoryProducts({
        cursorId,
        filterValue: INIT_FILTER_VALUE
      });
      return result;
    },
    initialPageParam: INITIAL_CURSOR
  });

  return (
    <>
      <CategoryTab filterFamilyId={FILTER_FAMILY_ID.main} />
      <SortingFilterSection filterFamilyId={FILTER_FAMILY_ID.main} />
      <HydrationBoundary state={dehydrate(queryClient)}>
        <MainProductList />
      </HydrationBoundary>
      <TopButton />
    </>
  );
};

export default ProductListPage;
