import { HydrationBoundary, QueryClient, dehydrate } from '@tanstack/react-query';
import MainProductList from '@/blocks/product/MainProductList';
import FilterSection from '@/domains/product/components/FilterSection';
import { FILTER_FAMILY_ID } from '@/domains/product/constants/filterFamilyID';
import productService from '@/domains/product/queries/service';
import { INIT_FILTER_VALUE } from '@/domains/product/constants/filterValues';
import { productQueryKey } from '@/shared/queries/queryKey';
import { INITIAL_CURSOR } from '@/shared/constants/cursor';

const ProductList = async () => {
  const queryClient = new QueryClient();
  await queryClient.prefetchInfiniteQuery({
    queryKey: [...productQueryKey.list('main'), { filter: INIT_FILTER_VALUE }],
    queryFn: async ({ pageParam: cursorId }: { pageParam: number }) => {
      const result = await productService.getAllProducts({
        cursorId,
        filterValue: INIT_FILTER_VALUE
      });
      return result;
    },
    initialPageParam: INITIAL_CURSOR
  });

  return (
    <>
      <FilterSection filterFamilyId={FILTER_FAMILY_ID.main} />
      <HydrationBoundary state={dehydrate(queryClient)}>
        <MainProductList />
      </HydrationBoundary>
    </>
  );
};

export default ProductList;
