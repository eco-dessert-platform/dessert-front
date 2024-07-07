export type AlarmType = 'bbangcketing' | 'restock';

export interface PushProductType {
  productId: number;
  storeName: string;
  productTitle: string;
  boardThumbnail: string;
  subscribed: boolean;
}

export interface AddAlarmProps {
  fcmToken: string;
  pushCategory: AlarmType;
  productOptionId: number;
}

export interface CancelAlarmProps {
  pushCategory: AlarmType;
  productOptionId: number;
}

export interface GetAlarmProps {
  pushCategory: AlarmType;
}
