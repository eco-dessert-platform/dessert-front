import { useInfiniteQuery, GetNextPageParamFunction } from '@tanstack/react-query';
import QUERY_KEY from '@/shared/constants/queryKey';
import { NotificationType } from '@/domains/user/types/notification';
import fetchExtend from '@/shared/utils/api';
import { Cursor, ResultResponse } from '@/shared/types/response';
import { throwApiError } from '@/shared/utils/error';

export const useGetAllNotificationsQuery = () => {
  const queryKey = [QUERY_KEY.notification];

  const queryFn = async ({ pageParam }: { pageParam: number }) => {
    const res = await fetchExtend.get(`/notification?cursorId=${pageParam}`);
    const { result, success, code, message }: ResultResponse<Cursor<NotificationType>> =
      await res.json();
    if (!res.ok || !success) throwApiError({ code, message });
    return result;
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
    queryKey,
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
