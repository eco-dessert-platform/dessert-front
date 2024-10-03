import { DayEnType } from '@/domains/product/types/dayType';

export type OrderType = 'WEEK' | 'DATE';
export type WeekObjectType = {
  [key in DayEnType]: boolean;
};
export type WeekArrayType = Array<DayEnType>;

interface BaseProductOptionType {
  id: number;
  title: string;
  glutenFreeTag: boolean;
  highProteinTag: boolean;
  sugarFreeTag: boolean;
  veganTag: boolean;
  ketogenicTag: boolean;
  price: number;
  nutrient: {
    sugars: number;
    protein: number;
    carbohydrates: number;
    fat: number;
    weight: number;
    calories: number;
  };
  orderType: OrderType;
  isSoldout: boolean;
  isNotified: boolean;
}

export interface WeekProductOptionType extends BaseProductOptionType {
  orderAvailableWeek: WeekObjectType;
  appliedOrderWeek?: WeekObjectType;
}

export interface DateProductOptionType extends BaseProductOptionType {
  orderAvailableDate: {
    startDate: string;
    endDate: string;
  };
}

export type ProductOptionType = WeekProductOptionType | DateProductOptionType;

export interface ProductOptionResponse {
  boardIsBundled: boolean;
  products: Array<ProductOptionType>;
}

export interface IBoardDetailType {
  boardId: number;
  storeId: number;
  profile: string;
  title: string;
  price: number;
  purchaseUrl: string;
  deliveryFee: number;
  discountRate: number;
  freeShippingConditions: number;
  isWished: boolean;
  boardImages: string[];
  boardDetails: string[];
}
export interface IReviewBadgeType {
  rating: string;
  count: string;
  badges: string[];
}

export interface IReviewRatingType {
  rating: string;
  count: string;
  taste: { good: number; bad: number };
  brix: { sweet: number; plain: number };
  texture: { soft: number; dry: number };
}
