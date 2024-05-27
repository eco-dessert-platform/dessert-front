import { Cursor, ResultResponse, DefaultResponse } from '@/shared/types/response';
import QUERY_KEY from '@/shared/constants/queryKey';
import { ERROR_MESSAGE } from '@/shared/constants/error';
import { INITIAL_CORSOR } from '@/shared/constants/corsor';
import Service from '@/shared/queries/service';
import { PreferenceType, PreferenceResultType } from '@/domains/user/types/profile';
import { NotificationDetailType, NotificationType } from '../types/notification';

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
      next: { tags: [QUERY_KEY.notification, String(id)] }
    });
    const { result, success, code, message }: ResultResponse<NotificationDetailType> =
      await res.json();
    if (!res.ok || !success) throw new Error(ERROR_MESSAGE.api({ code, message }));
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
    const res = await this.fetchExtend.get('/preference');
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
