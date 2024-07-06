export type AlarmType = 'bbangcketing' | 'restock';

export interface ProductType {
  id: number;
  title: string;
  description: string;
  thumbnail: string;
  isAlarming: boolean;
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
