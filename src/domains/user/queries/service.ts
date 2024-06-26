import { Cursor, ResultResponse, DefaultResponse } from '@/shared/types/response';
import { ERROR_MESSAGE } from '@/shared/constants/error';
import { INITIAL_CURSOR } from '@/shared/constants/cursor';
import Service from '@/shared/queries/service';
import { NotificationDetailType, NotificationType } from '../types/notification';
import { notificationQueryKey, userProfileQueryKey, preferenceQueryKey } from './queryKey';
import { UserProfileType, PreferenceType, PreferenceResultType } from '../types/profile';

class UserService extends Service {
  async getNotifications(cursorId: number) {
    const params = cursorId === INITIAL_CURSOR ? '' : `?cursorId=${cursorId}`;
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

  async addPreference(preference: Array<PreferenceType>) {
    const res = await this.fetchExtend.post('/preference', {
      body: JSON.stringify({ preferenceType: preference.join('_').replace(' ', '_').toUpperCase() })
    });
    const { success, code, message }: DefaultResponse = await res.json();
    if (!res.ok || !success) throw new Error(ERROR_MESSAGE.api({ code, message }));
  }

  async getPreference() {
    const res = await this.fetchExtend.get('/preference', {
      next: { tags: preferenceQueryKey.all }
    });
    const { result, success, code, message }: ResultResponse<PreferenceResultType> =
      await res.json();
    if (!res.ok || !success) throw new Error(ERROR_MESSAGE.api({ code, message }));
    return result.preferenceType;
  }

  async updatePreference(preference: Array<PreferenceType>) {
    const res = await this.fetchExtend.put('/preference', {
      body: JSON.stringify({ preferenceType: preference.join('_').replace(' ', '_').toUpperCase() })
    });
    const { success, code, message }: DefaultResponse = await res.json();
    if (!res.ok || !success) throw new Error(ERROR_MESSAGE.api({ code, message }));
  }
}

const userService = new UserService();

export default userService;
