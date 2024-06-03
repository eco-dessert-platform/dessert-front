import { Cursor, ResultResponse } from '@/shared/types/response';
import { INITIAL_CORSOR } from '@/shared/constants/corsor';
import Service from '@/shared/queries/service';
import { ERROR_MESSAGE } from '@/shared/constants/error';
import { NotificationDetailType, NotificationType } from '../types/notification';
import { UserProfileType } from '../types/profile';
import { notificationQueryKey, userProfileQueryKey } from './queryKey';

class UserService extends Service {
  async getNotifications(cursorId: number) {
    const params = cursorId === INITIAL_CORSOR ? '' : `?corsorId=${cursorId}`;
    const res = await this.fetchExtend.get(`/notification${params}`);
    const { result, success, code, message }: ResultResponse<Cursor<NotificationType>> =
      await res.json();

    if (!res.ok || !success) throw new Error(ERROR_MESSAGE.api({ code, message }));
    return result;
  }

  async getNotificationDetail(id: number) {
    const res = await this.fetchExtend.get(`/notification/${id}`, {
      next: { tags: notificationQueryKey.detail(id) }
    });
    const { result, success, code, message }: ResultResponse<NotificationDetailType> =
      await res.json();
    if (!res.ok || !success) throw new Error(ERROR_MESSAGE.api({ code, message }));
    return result;
  }

  async getUserProfile() {
    const res = await this.fetchExtend.get('/profile', {
      next: {
        tags: userProfileQueryKey.all
      }
    });
    if (res.status === 401) throw new Error(ERROR_MESSAGE.requiredLogin);
    const { result, success, code, message }: ResultResponse<UserProfileType> = await res.json();
    if (!success) {
      throw new Error(ERROR_MESSAGE.api({ code, message }));
    }
    return result;
  }
}

const userService = new UserService();

export default userService;
