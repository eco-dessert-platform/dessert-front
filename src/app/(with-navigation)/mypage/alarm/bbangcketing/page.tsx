import { dehydrate, HydrationBoundary, QueryClient } from '@tanstack/react-query';
import { alarmQueryKey } from '@/domains/alarm/queries/queryKey';
import alarmService from '@/domains/alarm/queries/service';
import BbancketingProductList from '@/app/(with-navigation)/mypage/alarm/bbangcketing/_blocks/BbangcketingProductList';

const BbancketingPage = async () => {
  const queryClient = new QueryClient();
  await queryClient.prefetchQuery({
    queryKey: alarmQueryKey.list('bbangcketing'),
    queryFn: () => alarmService.getAlarm({ pushCategory: 'bbangcketing' })
  });

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <BbancketingProductList />
    </HydrationBoundary>
  );
};

export default BbancketingPage;
