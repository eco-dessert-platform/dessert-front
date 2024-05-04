import { useInfiniteQuery, GetNextPageParamFunction } from '@tanstack/react-query';
import { NotificationType } from '@/domains/user/types/notification';
import { Cursor } from '@/shared/types/response';
import policyService from './service';
import { notificationQueryKey } from './queryKey';

export const useGetAllNotificationsQuery = () => {
  const queryFn = async ({ pageParam }: { pageParam: number }) => {
    const data = await policyService.getNotifications(pageParam);
    return data;
  };

  const getNextPageParam: GetNextPageParamFunction<number, Cursor<NotificationType>> = (
    lastPage,
    __,
    lastPageParam
  ) => {
    const nextPageParam = lastPage.nextCursor === lastPageParam ? undefined : lastPageParam + 1;
    return nextPageParam;
  };

  return useInfiniteQuery({
    queryKey: notificationQueryKey.all,
    queryFn,
    initialPageParam: 1,
    getNextPageParam,
    refetchOnMount: false,
    refetchOnReconnect: false,
    refetchOnWindowFocus: false,
    select: ({ pages }) => {
      const notifications = pages.map((page) => page.content).flat();
      return notifications;
    }
  });
};
