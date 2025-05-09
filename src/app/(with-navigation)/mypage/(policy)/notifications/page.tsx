import NotificationListSection from '@/blocks/user/(policy)/NotificationListSection';
import { notificationQueryKey } from '@/domains/user/queries/queryKey';
import userService from '@/domains/user/queries/service';
import { HydrationBoundary, QueryClient, dehydrate } from '@tanstack/react-query';
import { INITIAL_CURSOR } from '@/shared/constants/cursor';

const Notifications = async () => {
  const queryClient = new QueryClient();
  await queryClient.fetchInfiniteQuery({
    queryKey: notificationQueryKey.all,
    queryFn: async ({ pageParam }) => {
      const notifications = await userService.getNotifications(pageParam);
      return notifications;
    },
    initialPageParam: INITIAL_CURSOR
  });

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <NotificationListSection />
    </HydrationBoundary>
  );
};

export default Notifications;
