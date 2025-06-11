'use client';

import React from 'react';
import { useAtom } from 'jotai';

import { filterValueAtom } from '@/domains/product/atoms'; // Change to Jotai atom
import { FilterFamilyIDType } from '@/domains/product/types/filterType';
import { FILTER_VALUES, INIT_FILTER_VALUE } from '@/domains/product/constants/filterValues';
import { getIngredientTag, getPriceTag } from '@/domains/product/utils/getTag';
import { isEqualArray } from '@/domains/product/utils/isEqualArray';
import useCategory from '@/domains/product/hooks/useCategory';
import PaddingWrapper from '@/shared/components/PaddingWrapper';
import ProductSortSelect from './ProductSortSelect';
import FilterButton from './FilterButton';
import MainBoardCount from './MainBoardCount';
import SearchBoardCount from './SearchBoardCount';

interface Props {
  filterFamilyId: FilterFamilyIDType;
}

const SortingFilterSection = ({ filterFamilyId }: Props) => {
  const [filterValue, setFilterValue] = useAtom(filterValueAtom);
  const { elaborateCategory, simplifyCategory } = useCategory();

  return (
    <PaddingWrapper className="flex flex-col gap-y-[10px] pb-[12px] border-b border-gray-100">
      <div className="flex justify-between items-center">
        {filterFamilyId === 'main' && <MainBoardCount />}
        {filterFamilyId === 'search' && <SearchBoardCount />}
        <ProductSortSelect />
      </div>
      <div className="flex gap-[4px]">
        <FilterButton
          text={
            simplifyCategory(filterValue.category) === INIT_FILTER_VALUE.category
              ? FILTER_VALUES.category.name
              : filterValue.category
          }
          isFiltered={simplifyCategory(filterValue.category) !== INIT_FILTER_VALUE.category}
          onReset={() => {
            setFilterValue((prev) => ({
              ...prev,
              category: elaborateCategory(INIT_FILTER_VALUE.category)
            }));
          }}
        />
        <FilterButton
          text={
            isEqualArray(filterValue.tags, INIT_FILTER_VALUE.tags)
              ? FILTER_VALUES.tags.name
              : getIngredientTag(filterValue.tags)
          }
          isFiltered={!isEqualArray(filterValue.tags, INIT_FILTER_VALUE.tags)}
          onReset={() => {
            setFilterValue((prev) => ({ ...prev, tags: INIT_FILTER_VALUE.tags }));
          }}
        />
        <FilterButton
          text={
            isEqualArray(filterValue.price, INIT_FILTER_VALUE.price)
              ? FILTER_VALUES.price.name
              : getPriceTag(filterValue.price)
          }
          isFiltered={!isEqualArray(filterValue.price, INIT_FILTER_VALUE.price)}
          onReset={() => {
            setFilterValue((prev) => ({ ...prev, price: INIT_FILTER_VALUE.price }));
          }}
        />
      </div>
    </PaddingWrapper>
  );
};

export default SortingFilterSection;
