import { atom, useAtom } from 'jotai';

import {
  mainFilterValueAtom,
  searchFilterValueAtom,
  homeFilterValueAtom
} from '@/domains/product/atoms';
import { FilterFamilyIDType, IFilterType } from '@/domains/product/types/filterType';

const map: Record<FilterFamilyIDType, ReturnType<typeof atom<IFilterType>>> = {
  main: mainFilterValueAtom,
  search: searchFilterValueAtom,
  home: homeFilterValueAtom
} as const;

export const useFilter = (filterFamilyId: FilterFamilyIDType) => useAtom(map[filterFamilyId]);
