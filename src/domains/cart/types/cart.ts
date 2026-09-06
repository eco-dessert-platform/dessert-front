export type CartItemStatus = 'ON_SALE' | 'OUT_OF_STOCK' | 'STOPPED' | 'PENDING' | 'BANNED';

export type CartDiscountType = 'RATE' | 'AMOUNT';

export interface AddCartRequest {
  boardId: number;
  options: SelectedOptions[];
}

export interface SelectedOptions {
  productId: number;
  quantity?: number;
}

export interface UpdateCartOptionRequest {
  quantity?: number;
}

export interface ChangeCartOptionRequest {
  optionId: number;
}

export interface DeleteCartOptionsRequest {
  cartOptionIds: number[];
}

export interface CartListResponse {
  carts: CartStoreDTO[];
}

export interface CartStoreDTO {
  storeId: number;
  storeName: string;
  storeProfile: string;
  items: CartItemDTO[];
}

export interface CartItemDTO {
  cartItemId: number;
  itemId: number;
  itemName: string;
  itemImg: string;
  status: CartItemStatus;
  price: PriceDTO;
  availableOptions: AvailableOptionDTO[];
  selectedOptions: SelectedOptionDTO[];
}

export interface PriceDTO {
  base: number;
  discountType: CartDiscountType;
  discountValue: number;
  deliveryFee: number;
}

export interface AvailableOptionDTO {
  optionId: number;
  optionName: string;
  addedPrice: number;
  stock: number;
}

export interface SelectedOptionDTO {
  cartOptionId: number;
  optionId: number;
  optionName: string;
  addedPrice: number;
  quantity: number;
}

export interface UpdateCartOptionResponse {
  cartOptionId: number;
  optionId: number;
  optionName: string;
  quantity: number;
}
