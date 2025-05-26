import { dehydrate, HydrationBoundary, QueryClient } from '@tanstack/react-query';
import { alarmQueryKey } from '@/domains/alarm/queries/queryKey';
import alarmService from '@/domains/alarm/queries/service';
import RestockClient from '@/app/(with-navigation)/mypage/alarm/restock/_blocks/RestockClient';

const RestockPage = async () => {
  const queryClient = new QueryClient();
  await queryClient.prefetchQuery({
    queryKey: alarmQueryKey.list('restock'),
    queryFn: () => alarmService.getAlarm({ pushCategory: 'restock' }),
  });

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <RestockClient />
    </HydrationBoundary>
  );
};

export default RestockPage;
