import QueryString from 'qs';
import { Cursor, ResultResponse, DefaultResponse } from '@/shared/types/response';
import { ERROR_MESSAGE } from '@/shared/constants/error';
import { INITIAL_CURSOR } from '@/shared/constants/cursor';
import Service from '@/shared/queries/service';
import { transformPreferenceToEng } from '@/domains/user/utils/transformPreference';
import { NotificationDetailType, NotificationType } from '../types/notification';
import { notificationQueryKey, userProfileQueryKey } from './queryKey';
import { UserProfileType, WithdrawResponse } from '../types/profile';
import { PreferenceType, PreferenceResultType } from '../types/preference';
import { KakaoAuthResponse, LoginResponse, SocialType } from '../types/login';
import { KAKAO } from '../constants/socialLogin';

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

  async withdraw(deleteReasons: Array<string>) {
    const res = await this.fetchExtend.patch('/members', {
      body: JSON.stringify({
        reasons: deleteReasons.join(',')
      })
    });
    const { result, success, message, code }: ResultResponse<WithdrawResponse> = await res.json();
    if (!res.ok || !success) throw new Error(ERROR_MESSAGE.api({ code, message }));
    return result;
  }

  async addPreference(preference: Array<PreferenceType>) {
    const res = await this.fetchExtend.post('/preference', {
      body: JSON.stringify({
        preferenceType: preference
          .map((ele) => transformPreferenceToEng(ele))
          .join('_')
          .replace(' ', '_')
          .toUpperCase()
      })
    });
    const { success, code, message }: DefaultResponse = await res.json();
    if (!res.ok || !success) throw new Error(ERROR_MESSAGE.api({ code, message }));
  }

  async getPreference() {
    const res = await this.fetchExtend.get('/preference', { cache: 'no-store' });
    const { result, success, code, message }: ResultResponse<PreferenceResultType> =
      await res.json();
    if (!res.ok || !success) throw new Error(ERROR_MESSAGE.api({ code, message }));
    return result.preferenceType;
  }

  async updatePreference(preference: Array<PreferenceType>) {
    const res = await this.fetchExtend.put('/preference', {
      body: JSON.stringify({
        preferenceType: preference
          .map((ele) => transformPreferenceToEng(ele))
          .join('_')
          .replace(' ', '_')
          .toUpperCase()
      })
    });
    const { success, code, message }: DefaultResponse = await res.json();
    if (!res.ok || !success) throw new Error(ERROR_MESSAGE.api({ code, message }));
  }

  async getKakaoToken(code: string) {
    const body = QueryString.stringify({
      grant_type: 'authorization_code',
      client_id: KAKAO.client_id,
      redirect_uri: KAKAO.redirect_uri,
      code
    });

    const res = await this.fetchExtend.post('https://kauth.kakao.com/oauth/token', {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8'
      },
      body
    });
    if (!res.ok) throw new Error('카카오 로그인 실패');
    const data: KakaoAuthResponse = await res.json();
    return data;
  }

  async login({ socialType, socialToken }: { socialType: SocialType; socialToken: string }) {
    const url = `/oauth/login/${socialType.toLocaleLowerCase()}?token=${socialToken}`;
    const res = await this.fetchExtend.get(url);
    const { result, success, code, message }: ResultResponse<LoginResponse> = await res.json();
    if (!res.ok || !success) {
      throw new Error(ERROR_MESSAGE.api({ code, message }));
    }

    return result;
  }

  async extendLogin(refreshToken: string) {
    const res = await this.fetchExtend.post('/token', {
      body: JSON.stringify({ refreshToken })
    });
    const { result, success, code, message }: ResultResponse<{ accessToken: string }> =
      await res.json();
    if (!res.ok || !success) {
      throw new Error(ERROR_MESSAGE.api({ code, message }));
    }
    return result;
  }

  async getMyPreferenceStatus() {
    const res = await this.fetchExtend.get('/members/status');
    const {
      result,
      success,
      code,
      message
    }: ResultResponse<{ isFullyAssigned: boolean; isPreferenceAssigned: boolean }> =
      await res.json();
    if (!res.ok || !success) {
      throw new Error(ERROR_MESSAGE.api({ code, message }));
    }
    return result;
  }
}

const userService = new UserService();

export default userService;
