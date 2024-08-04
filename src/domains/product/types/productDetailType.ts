export type OrderType = 'WEEK' | 'DATE';

export interface ProductOptionResponse {
  boardIsBundled: boolean;
  products: ProductOptionType[];
}

export interface ProductOptionType {
  id: number;
  title: string;
  glutenFreeTag: boolean;
  highProteinTag: boolean;
  sugarFreeTag: boolean;
  veganTag: boolean;
  ketogenicTag: boolean;
  nutrient: {
    sugars: number;
    protein: number;
    carbohydrates: number;
    fat: number;
    weight: number;
    calories: number;
  };
  orderType: OrderType;
  orderAvailableDate: {
    startDate: string;
    endDate: string;
  };
  orderAvailableWeek: {
    monday: boolean;
    tuesday: boolean;
    wednesday: boolean;
    thursday: boolean;
    friday: boolean;
    saturday: boolean;
    sunday: boolean;
  };
  isNotified: boolean;
  soldout: boolean;
}

export interface IBoardDetailType {
  id: number;
  storeId: number;
  profile: string;
  title: string;
  price: number;
  purchaseUrl: string;
  deliveryFee: number;
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
