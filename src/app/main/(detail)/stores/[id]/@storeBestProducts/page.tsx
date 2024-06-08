import { HydrationBoundary, QueryClient, dehydrate } from '@tanstack/react-query';
import { productQueryKey } from '@/shared/queries/queryKey';
import storeService from '@/domains/store/queries/service';
import StoreBestProductsSection from '@/blocks/store/StoreBestProductsSection';

interface Props {
  params: { id: string };
}

const StoreBestProductsPage = async ({ params: { id } }: Props) => {
  const queryClient = new QueryClient();
  await queryClient.prefetchQuery({
    queryKey: productQueryKey.list('store-detail/best'),
    queryFn: async () => {
      const data = await storeService.getStoreBestProducts(Number(id));
      return data;
    }
  });

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <StoreBestProductsSection storeId={Number(id)} />
    </HydrationBoundary>
  );
};

export default StoreBestProductsPage;
