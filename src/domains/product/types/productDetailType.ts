export interface IProductType {
  id: number;
  title: string;
  category: string;
  tags: string[];
}

// 새로운 버전
export interface IProductDetailType {
  boardIsBundled: boolean;
  products: ProductsType[];
}

export interface ProductsType {
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
  orderType: string;
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
}

export interface INewStoreType {
  id: number;
  title: string;
  profile: string;
  isWished: boolean;
}

export interface IBoardDetailType {
  id: number;
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
