import SortingFilterSection from '@/blocks/main/(list)/SortingFilterSection';
import SearchProductList from '@/blocks/search/products/SearchProductList';
import { FILTER_FAMILY_ID } from '@/domains/product/constants/filterFamilyID';
import { INIT_FILTER_VALUE } from '@/domains/product/constants/filterValues';
import searchService from '@/domains/search/queries/service';
import { productQueryKey } from '@/shared/queries/queryKey';
import { dehydrate, HydrationBoundary, QueryClient } from '@tanstack/react-query';

interface SearchProductsProps {
  searchParams: { query?: string };
}

const SearchProducts = async ({ searchParams: { query: keyword = '' } }: SearchProductsProps) => {
  const queryClient = new QueryClient();
  await queryClient.prefetchInfiniteQuery({
    queryKey: [...productQueryKey.list('search'), { filter: INIT_FILTER_VALUE, keyword }],
    queryFn: async ({ pageParam }) => {
      const result = await searchService.getSearchProducts({
        keyword,
        filterValue: INIT_FILTER_VALUE,
        pageParam
      });
      return result;
    },
    initialPageParam: 0
  });

  return (
    <>
      <SortingFilterSection filterFamilyId={FILTER_FAMILY_ID.search} />
      <HydrationBoundary state={dehydrate(queryClient)}>
        <SearchProductList keyword={keyword} />
      </HydrationBoundary>
    </>
  );
};

export default SearchProducts;
