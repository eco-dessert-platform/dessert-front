import { HydrationBoundary, QueryClient, dehydrate } from '@tanstack/react-query';
import { storeQueryKey } from '@/shared/queries/queryKey';
import storeService from '@/domains/store/queries/service';
import { INITIAL_CURSOR } from '@/shared/constants/cursor';
import GrayDivider from '@/shared/components/GrayDivider';
import StoreInfoSection from '@/blocks/store/StoreInfoSection';
import StoreBestProductsSection from '@/blocks/store/StoreBestProductsSection';
import StoreAllProductsSection from '@/blocks/store/StoreAllProductsSection';

interface Props {
  params: { id: string };
}

const MainStoreDetailPage = async ({ params: { id } }: Props) => {
  const storeId = Number(id);
  const queryClient = new QueryClient();
  await Promise.all([
    queryClient.prefetchQuery({
      queryKey: storeQueryKey.detail(storeId, 'info'),
      queryFn: async () => {
        const data = await storeService.getStoreInfo(storeId);
        return data;
      }
    }),
    queryClient.prefetchQuery({
      queryKey: storeQueryKey.detail(storeId, 'best-products'),
      queryFn: async () => {
        const data = await storeService.getStoreBestProducts(storeId);
        return data;
      }
    }),
    queryClient.prefetchInfiniteQuery({
      queryKey: storeQueryKey.detail(storeId, 'all-products'),
      queryFn: async () => {
        const data = await storeService.getStoreAllProducts(storeId);
        return data;
      },
      initialPageParam: INITIAL_CURSOR
    })
  ]);

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <StoreInfoSection storeId={storeId} />
      <GrayDivider color="gray100" className="h-[4px]" />
      <StoreBestProductsSection storeId={storeId} />
      <GrayDivider color="gray100" />
      <StoreAllProductsSection storeId={storeId} />
    </HydrationBoundary>
  );
};

export default MainStoreDetailPage;
