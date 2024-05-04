import fetchExtend from '@/shared/utils/api';
import QUERY_KEY from '@/shared/constants/queryKey';
import { ResultResponse } from '@/shared/types/response';
import { throwApiError } from '@/shared/utils/error';
import { NotificationDetailType } from '../types/notification';

const getNotificationDetail = async (id: number) => {
  const res = await fetchExtend.get(`/notification/${id}`, {
    next: { tags: [QUERY_KEY.notification, String(id)] }
  });
  const { result, success, code, message }: ResultResponse<NotificationDetailType> =
    await res.json();
  if (!res.ok || !success) {
    throwApiError({ code, message });
  }
  return result;
};

export default getNotificationDetail;
