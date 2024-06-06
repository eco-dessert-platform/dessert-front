import { HydrationBoundary, QueryClient, dehydrate } from '@tanstack/react-query';
import { storeQueryKey } from '@/shared/queries/queryKey';
import { INITIAL_CURSOR } from '@/shared/constants/cursor';
import storeService from '@/domains/store/queries/service';
import MainStoreList from '@/blocks/store/MainStoreList';

const StoreList = async () => {
  const queryClient = new QueryClient();
  await queryClient.fetchInfiniteQuery({
    queryKey: storeQueryKey.list('main'),
    queryFn: async ({ pageParam: cursorId }) => {
      const data = await storeService.getAllStores(cursorId);
      return data;
    },
    initialPageParam: INITIAL_CURSOR
  });

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <MainStoreList />
    </HydrationBoundary>
  );
};

export default StoreList;
