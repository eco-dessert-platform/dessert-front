import type { Metadata } from 'next';
import { HydrationBoundary, QueryClient, dehydrate } from '@tanstack/react-query';
import { storeQueryKey } from '@/shared/queries/queryKey';
import storeService from '@/domains/store/queries/service';
import { INITIAL_CURSOR } from '@/shared/constants/cursor';
import Header from '@/shared/components/Header';

export async function generateMetadata({
  params: { id }
}: {
  params: { id: string };
}): Promise<Metadata> {
  const storeId = Number(id);
  const storeInfo = await storeService.getStoreInfo(storeId);
  const storeAllProducts = await storeService.getStoreAllProducts(storeId);
  return {
    title: storeInfo.storeName,
    description: `${storeInfo.introduce}. ${storeAllProducts.content.map((product) => product.title).join(', ')}`,
    openGraph: {
      title: '빵그리의 오븐',
      description: `[${storeInfo.storeName}] ${storeInfo.introduce}`,
      images: [
        {
          url: storeInfo.profile,
          alt: 'store image'
        }
      ]
    }
  };
}

interface Props {
  params: { id: string };
  children: React.ReactNode;
}

const MainStoreDetailLayout = async ({ params: { id }, children }: Props) => {
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
      <Header title="스토어" back />
      {children}
    </HydrationBoundary>
  );
};

export default MainStoreDetailLayout;
