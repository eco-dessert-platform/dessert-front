import { HydrationBoundary, QueryClient, dehydrate } from '@tanstack/react-query';
import { storeQueryKey } from '@/shared/queries/queryKey';
import storeService from '@/domains/store/queries/service';
import StoreInfoSection from '@/blocks/store/StoreInfoSection';

interface Props {
  params: { id: string };
}

const StoreInfoPage = async ({ params: { id } }: Props) => {
  const queryClient = new QueryClient();
  await queryClient.fetchQuery({
    queryKey: storeQueryKey.detail(Number(id)),
    queryFn: async () => {
      const data = await storeService.getStoreInfo(Number(id));
      return data;
    }
  });

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <StoreInfoSection storeId={Number(id)} />
    </HydrationBoundary>
  );
};

export default StoreInfoPage;
