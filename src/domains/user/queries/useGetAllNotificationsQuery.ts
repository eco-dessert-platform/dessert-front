import { useInfiniteQuery, GetNextPageParamFunction } from '@tanstack/react-query';
import { NotificationType } from '@/domains/user/types/notification';
import { Cursor } from '@/shared/types/response';
import { INITIAL_CURSOR } from '@/shared/constants/cursor';
import policyService from './service';
import { notificationQueryKey } from './queryKey';

export const useGetAllNotificationsQuery = () => {
  const queryFn = async ({ pageParam }: { pageParam: number }) => {
    const data = await policyService.getNotifications(pageParam);
    return data;
  };

  const getNextPageParam: GetNextPageParamFunction<number, Cursor<NotificationType>> = ({
    hasNext,
    nextCursor
  }) => {
    const nextPageParam = hasNext ? undefined : nextCursor;
    return nextPageParam;
  };

  return useInfiniteQuery({
    queryKey: notificationQueryKey.all,
    queryFn,
    initialPageParam: INITIAL_CURSOR,
    getNextPageParam,
    refetchOnMount: false,
    refetchOnReconnect: false,
    refetchOnWindowFocus: false,
    select: ({ pages }) => {
      const notifications = pages.flatMap((page) => page.content);
      return notifications;
    }
  });
};
