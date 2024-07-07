import Service from '@/shared/queries/service';
import { DefaultResponse, ListResponse } from '@/shared/types/response';
import { ERROR_MESSAGE } from '@/shared/constants/error';
import {
  AddAlarmProps,
  CancelAlarmProps,
  GetAlarmProps,
  PushProductType
} from '@/domains/alarm/types';

class AlarmService extends Service {
  async addAlarm({ fcmToken, pushCategory, productOptionId }: AddAlarmProps) {
    const res = await this.fetchExtend.post('/push', {
      body: JSON.stringify({
        fcmToken,
        pushCategory: pushCategory.toUpperCase(),
        productId: productOptionId
      })
    });
    const { success, code, message }: DefaultResponse = await res.json();

    if (!res.ok || !success) throw new Error(ERROR_MESSAGE.api({ code, message }));
  }

  async cancelAlarm({ pushCategory, productOptionId }: CancelAlarmProps) {
    const res = await this.fetchExtend.patch('/push', {
      body: JSON.stringify({
        pushCategory: pushCategory.toUpperCase(),
        productId: productOptionId
      })
    });
    const { success, code, message }: DefaultResponse = await res.json();

    if (!res.ok || !success) throw new Error(ERROR_MESSAGE.api({ code, message }));
  }

  async getAlarm({ pushCategory }: GetAlarmProps) {
    const res = await this.fetchExtend.get(`/push?pushCategory=${pushCategory.toUpperCase()}`);
    const { list, success, code, message }: ListResponse<Array<PushProductType>> = await res.json();

    if (!res.ok || !success) throw new Error(ERROR_MESSAGE.api({ code, message }));
    return list;
  }
}

const alarmService = new AlarmService();
export default alarmService;
