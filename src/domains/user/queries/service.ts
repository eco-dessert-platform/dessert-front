import { Cursor, ResultResponse } from '@/shared/types/response';
import QUERY_KEY from '@/shared/constants/queryKey';
import { throwApiError } from '@/shared/utils/error';
import Service from '@/shared/queries/service';
import { NotificationDetailType, NotificationType } from '../types/notification';

class PolicyService extends Service {
  async getNotifications(cursorId: number) {
    const res = await this.fetchExtend.get(`/notification?cursorId=${cursorId}`);
    const { result, success, code, message }: ResultResponse<Cursor<NotificationType>> =
      await res.json();
    if (!res.ok || !success) throwApiError({ code, message });
    return result;
  }

  async getNotificationDetail(id: number) {
    const res = await this.fetchExtend.get(`/notification/${id}`, {
      next: { tags: [QUERY_KEY.notification, String(id)] }
    });
    const { result, success, code, message }: ResultResponse<NotificationDetailType> =
      await res.json();
    if (!res.ok || !success) throwApiError({ code, message });
    return result;
  }
}

export default PolicyService;
