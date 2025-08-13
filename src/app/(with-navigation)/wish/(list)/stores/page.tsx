import WishStroeList from '@/blocks/wish/(list)/stores/WishStoreList';
import { storeQueryKey } from '@/shared/queries/queryKey';
import wishService from '@/domains/wish/queries/service';
import { INITIAL_CURSOR } from '@/shared/constants/cursor';
import { dehydrate, HydrationBoundary, QueryClient } from '@tanstack/react-query';

const WishStoresPage = async () => {
  const queryClient = new QueryClient();
  await queryClient.prefetchInfiniteQuery({
    queryKey: storeQueryKey.list('wish'),
    queryFn: ({ pageParam }) => wishService.getWishStoreList(pageParam),
    initialPageParam: INITIAL_CURSOR
  });

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <WishStroeList />
    </HydrationBoundary>
  );
};

export default WishStoresPage;
