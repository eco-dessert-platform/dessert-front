import { FILTER_FAMILY_ID } from '@/domains/product/constants/filterFamilyID';

export type MainCategoryType = string;
export type ICategoryType = string;
export type ITagsType = string[];
export type IPriceType = number[];
export type ISortType = string;
export type IOrderAvailableToday = boolean;

export interface IFilterType {
  category: ICategoryType;
  tags: ITagsType;
  price: IPriceType;
  sort: ISortType;
  orderAvailableToday: IOrderAvailableToday;
}

export type FilterFamilyIDType =
  | typeof FILTER_FAMILY_ID.main
  | typeof FILTER_FAMILY_ID.search
  | typeof FILTER_FAMILY_ID.home;
