import { HydrationBoundary, QueryClient, dehydrate } from '@tanstack/react-query';
import { storeQueryKey } from '@/shared/queries/queryKey';
import searchService from '@/domains/search/queries/service';
import SearchStoreList from '@/blocks/search/stores/SearchStoreList';

interface SearchStoresProps {
  searchParams: { query?: string };
}

const SearchStores = async ({ searchParams: { query: keyword = '' } }: SearchStoresProps) => {
  const queryClient = new QueryClient();
  await queryClient.prefetchInfiniteQuery({
    queryKey: [...storeQueryKey.list('search'), { keyword }],
    queryFn: async ({ pageParam }) => {
      const result = await searchService.getSearchStores({ keyword, pageParam });
      return result;
    },
    initialPageParam: 0
  });

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <SearchStoreList keyword={keyword} />
    </HydrationBoundary>
  );
};

export default SearchStores;
