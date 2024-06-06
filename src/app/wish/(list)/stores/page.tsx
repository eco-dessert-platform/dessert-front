import WishStroeList from '@/blocks/wish/(list)/stores/WishStoreList';
import { storeQueryKey } from '@/domains/store/queries/queryKey';
import wishService from '@/domains/wish/queries/service';
import { INITIAL_CORSOR } from '@/shared/constants/corsor';
import { HydrationBoundary, QueryClient, dehydrate } from '@tanstack/react-query';

const WishStoresPage = async () => {
  const queryClient = new QueryClient();
  await queryClient.prefetchInfiniteQuery({
    queryKey: storeQueryKey.list('wish'),
    queryFn: ({ pageParam }) => wishService.getWishStoreList(pageParam),
    initialPageParam: INITIAL_CORSOR
  });

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <WishStroeList />
    </HydrationBoundary>
  );
};

export default WishStoresPage;
