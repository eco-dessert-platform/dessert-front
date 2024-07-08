export type AlarmType = 'bbangcketing' | 'restock';

export interface PushProductType {
  productId: number;
  storeName: string;
  productTitle: string;
  boardThumbnail: string;
  subscribed: boolean;
}

export interface PushCategoryType {
  pushCategory: AlarmType;
}

export interface ProductOptionIdType {
  productOptionId: number;
}

export interface GetAlarmProps extends PushCategoryType {}

export interface AddAlarmProps extends PushCategoryType, ProductOptionIdType {
  fcmToken: string;
}

export interface CancelAlarmProps extends PushCategoryType, ProductOptionIdType {}

export interface DeleteAlarmProps extends PushCategoryType, ProductOptionIdType {}
