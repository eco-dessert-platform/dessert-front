import { HydrationBoundary, QueryClient, dehydrate } from '@tanstack/react-query';
import { productQueryKey } from '@/shared/queries/queryKey';
import searchService from '@/domains/search/queries/service';
import { FILTER_FAMILY_ID } from '@/domains/product/constants/filterFamilyID';
import { INIT_FILTER_VALUE } from '@/domains/product/constants/filterValues';
import FilterSection from '@/domains/product/components/FilterSection';
import SearchProductList from '@/blocks/search/products/SearchProductList';

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
      <FilterSection filterFamilyId={FILTER_FAMILY_ID.search} />
      <HydrationBoundary state={dehydrate(queryClient)}>
        <SearchProductList keyword={keyword} />
      </HydrationBoundary>
    </>
  );
};

export default SearchProducts;
