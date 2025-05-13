import { HydrationBoundary, QueryClient, dehydrate } from '@tanstack/react-query';
import { storeQueryKey } from '@/shared/queries/queryKey';
import storeService from '@/domains/store/queries/service';
import { INITIAL_CURSOR } from '@/shared/constants/cursor';
import GrayDivider from '@/shared/components/GrayDivider';
import StoreInfoSection from '@/blocks/store/StoreInfoSection';
import StoreBestProductsSection from '@/blocks/store/StoreBestProductsSection';
import StoreAllProductsSection from '@/blocks/store/StoreAllProductsSection';
import TopButton from '@/shared/components/TopButton';

interface Props {
  params: { id: string };
}

const MainStoreDetailPage = async ({ params: { id } }: Props) => {
  const storeId = Number(id);
  const queryClient = new QueryClient();
  const [storeInfo] = await Promise.all([
    queryClient.fetchQuery({
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
      queryFn: async ({ pageParam: cursorId }: { pageParam: number }) => {
        const data = await storeService.getStoreAllProducts(storeId, cursorId);
        return data;
      },
      initialPageParam: INITIAL_CURSOR
    })
  ]);

  return (
    <>
      <HydrationBoundary state={dehydrate(queryClient)}>
        <StoreInfoSection storeInfo={storeInfo} />
        <GrayDivider color="gray100" className="h-[4px]" />
        <StoreBestProductsSection storeInfo={storeInfo} />
        <GrayDivider color="gray100" />
        <StoreAllProductsSection storeInfo={storeInfo} />
      </HydrationBoundary>
      <TopButton />
    </>
  );
};

export default MainStoreDetailPage;
