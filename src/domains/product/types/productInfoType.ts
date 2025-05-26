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
  weight: number | null;
  calories: number | null;
};

type OrderType = {
  orderType: 'WEEK' | 'DATE';
  monday: boolean;
  tuesday: boolean;
  wednesday: boolean;
  thursday: boolean;
  friday: boolean;
  saturday: boolean;
  sunday: boolean;
  orderStartDate: string | null;
  orderEndDate: string | null;
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
