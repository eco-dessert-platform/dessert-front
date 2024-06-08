import { HydrationBoundary, QueryClient, dehydrate } from '@tanstack/react-query';
import { productQueryKey } from '@/shared/queries/queryKey';
import storeService from '@/domains/store/queries/service';
import { INITIAL_CURSOR } from '@/shared/constants/cursor';
import StoreAllProductsSection from '@/blocks/store/StoreAllProductsSection';

interface Props {
  params: { id: string };
}

const StoreAllProductsPage = async ({ params: { id } }: Props) => {
  const queryClient = new QueryClient();
  await queryClient.fetchInfiniteQuery({
    queryKey: productQueryKey.list('store-detail/all'),
    queryFn: async () => {
      const data = await storeService.getStoreAllProducts(Number(id));
      return data;
    },
    initialPageParam: INITIAL_CURSOR
  });

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <StoreAllProductsSection storeId={Number(id)} />
    </HydrationBoundary>
  );
};

export default StoreAllProductsPage;
