import { dehydrate, HydrationBoundary, QueryClient } from '@tanstack/react-query';
import { alarmQueryKey } from '@/domains/alarm/queries/queryKey';
import alarmService from '@/domains/alarm/queries/service';
import RestockProductList from '@/app/(with-navigation)/mypage/alarm/restock/_blocks/RestockProductList';

const RestockPage = async () => {
  const queryClient = new QueryClient();
  await queryClient.prefetchQuery({
    queryKey: alarmQueryKey.list('restock'),
    queryFn: () => alarmService.getAlarm({ pushCategory: 'restock' })
  });

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <RestockProductList />
    </HydrationBoundary>
  );
};

export default RestockPage;
