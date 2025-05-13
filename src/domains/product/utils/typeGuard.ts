import {
  ProductOptionType,
  WeekProductOptionType,
  DateProductOptionType
} from '@/domains/product/types/productDetailType';

export const isWeekProductOption = (product: ProductOptionType): product is WeekProductOptionType =>
  'orderAvailableWeek' in product;

export const isDateProductOption = (product: ProductOptionType): product is DateProductOptionType =>
  'orderAvailableDate' in product;
