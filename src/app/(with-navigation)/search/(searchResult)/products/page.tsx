import SortingFilterSection from '@/blocks/main/(list)/SortingFilterSection';
import SearchProductList from '@/blocks/search/products/SearchProductList';
import { FILTER_FAMILY_ID } from '@/domains/product/constants/filterFamilyID';
import TopButton from '@/shared/components/TopButton';
import { dehydrate, HydrationBoundary, QueryClient } from '@tanstack/react-query';

import { productQueryKey } from '@/shared/queries/queryKey';
import { INIT_FILTER_VALUE } from '@/domains/product/constants/filterValues';
import searchService from '@/domains/search/queries/service';
import CategoryTab from '@/domains/product/components/CategoryTab';

import { INITIAL_CURSOR } from '@/shared/constants/cursor';

interface SearchProductsProps {
  searchParams: { query?: string };
}

const SearchProducts = async ({ searchParams: { query: keyword = '' } }: SearchProductsProps) => {
  const queryClient = new QueryClient();

  await queryClient.prefetchInfiniteQuery({
    queryKey: [...productQueryKey.list('search'), { filter: INIT_FILTER_VALUE, keyword }],
    queryFn: async ({ pageParam: cursorId }: { pageParam: number }) => {
      const result = await searchService.getSearchProducts({
        keyword,
        filterValue: INIT_FILTER_VALUE,
        cursorId
      });
      return result;
    },
    initialPageParam: INITIAL_CURSOR
  });

  return (
    <>
      <CategoryTab />
      <SortingFilterSection filterFamilyId={FILTER_FAMILY_ID.search} />
      <HydrationBoundary state={dehydrate(queryClient)}>
        <SearchProductList keyword={keyword} />
      </HydrationBoundary>
      <TopButton />
    </>
  );
};

export default SearchProducts;
