import { atom } from 'jotai';
import { INIT_FILTER_VALUE } from '@/domains/product/constants/filterValues';
import {
  MainCategoryType,
  ICategoryType,
  IFilterType,
  IPriceType,
  ITagsType
} from '@/domains/product/types/filterType';

export const categoryAtom = atom<ICategoryType>(INIT_FILTER_VALUE.category);
export const tagsAtom = atom<ITagsType>(INIT_FILTER_VALUE.tags);
export const priceAtom = atom<IPriceType>(INIT_FILTER_VALUE.price);
export const orderAvailableTodayAtom = atom<boolean>(INIT_FILTER_VALUE.orderAvailableToday);
export const mainFilterValueAtom = atom<IFilterType>(INIT_FILTER_VALUE);
export const searchFilterValueAtom = atom<IFilterType>(INIT_FILTER_VALUE);
export const homeFilterValueAtom = atom<IFilterType>(INIT_FILTER_VALUE);
export const mainCategoryAtom = atom<MainCategoryType>('전체');
