import NotificationListSection from '@/blocks/user/(policy)/NotificationListSection';
import { notificationQueryKey } from '@/domains/user/queries/queryKey';
import policyService from '@/domains/user/queries/service';
import { HydrationBoundary, QueryClient, dehydrate } from '@tanstack/react-query';

const Notifications = async () => {
  const queryClient = new QueryClient();
  await queryClient.fetchInfiniteQuery({
    queryKey: notificationQueryKey.all,
    queryFn: async ({ pageParam }) => {
      const data = await policyService.getNotifications(pageParam);
      return data;
    },
    initialPageParam: 1
  });

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <NotificationListSection />
    </HydrationBoundary>
  );
};

export default Notifications;
