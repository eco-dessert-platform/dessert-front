type Store = {
  storeId: number;
  storeTitle: string;
  storeProfile: string;
  isStoreWished: boolean;
};

type Board = {
  boardId: number;
  boardProfile: string;
  boardTitle: string;
  boardPrice: number;
  purchaseUrl: string;
  isSoldout: boolean;
  deliveryFee: number;
  freeShippingConditions: number;
  discountRate: number;
  isBoardWished: boolean;
  boardImages: string[];
  boardDetail: string;
  isBundled: boolean;
};

type Nutrient = {
  sugars: number;
  protein: number;
  carbohydrates: number;
  fat: number;
  weight: number;
  calories: number;
};

export type OrderType = {
  orderType: 'WEEK' | 'DATE' | 'RESTOCK';
  monday: boolean;
  tuesday: boolean;
  wednesday: boolean;
  thursday: boolean;
  friday: boolean;
  saturday: boolean;
  sunday: boolean;
  orderStartDate: string;
  orderEndDate: string;
};

export type ProductType = {
  id: number;
  title: string;
  glutenFreeTag: boolean;
  highProteinTag: boolean;
  sugarFreeTag: boolean;
  veganTag: boolean;
  ketogenicTag: boolean;
  price: number;
  nutrient: Nutrient;
  isSoldout: boolean;
  orderType: OrderType;
  isBbangketting: boolean;
};

export interface IProductInfoType {
  store: Store;
  board: Board;
  products: ProductType[];
}
