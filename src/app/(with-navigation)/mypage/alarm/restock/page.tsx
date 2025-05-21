'use client';

import { dehydrate, HydrationBoundary, QueryClient } from '@tanstack/react-query';
import { alarmQueryKey } from '@/domains/alarm/queries/queryKey';
import alarmService from '@/domains/alarm/queries/service';
import dynamic from 'next/dynamic';

// 클라이언트 전용 컴포넌트를 동적으로 로딩
const RestockProductList = dynamic(() => import('@/app/(with-navigation)/mypage/alarm/restock/_blocks/RestockProductList'), {
  ssr: false, // 클라이언트 전용 컴포넌트로 SSR을 하지 않음
});

const RestockPage = async () => {
  const queryClient = new QueryClient();
  await queryClient.prefetchQuery({
    queryKey: alarmQueryKey.list('restock'),
    queryFn: () => alarmService.getAlarm({ pushCategory: 'restock' }),
  });

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <RestockProductList />
    </HydrationBoundary>
  );
};

export default RestockPage;
