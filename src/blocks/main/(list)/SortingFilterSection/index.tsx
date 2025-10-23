'use client';

import React from 'react';

import { FilterFamilyIDType } from '@/domains/product/types/filterType';
import { FILTER_VALUES, INIT_FILTER_VALUE } from '@/domains/product/constants/filterValues';
import { getIngredientTag, getPriceTag } from '@/domains/product/utils/getTag';
import { isEqualArray } from '@/domains/product/utils/isEqualArray';
import PaddingWrapper from '@/shared/components/PaddingWrapper';
import { useFilter } from '@/shared/hooks/useFilter';
import ProductSortSelect from './ProductSortSelect';
import FilterButton from './FilterButton';
import MainBoardCount from './MainBoardCount';
import SearchBoardCount from './SearchBoardCount';

interface Props {
  filterFamilyId: FilterFamilyIDType;
}

const SortingFilterSection = ({ filterFamilyId }: Props) => {
  const [filterValue, setFilterValue] = useFilter(filterFamilyId);

  return (
    <PaddingWrapper className="flex flex-col gap-y-[10px] border-b border-gray-100 pb-[12px]">
      <div className="flex items-center justify-between">
        {filterFamilyId === 'main' && <MainBoardCount />}
        {filterFamilyId === 'search' && <SearchBoardCount />}
        <ProductSortSelect filterFamilyId={filterFamilyId} />
      </div>
      <div className="flex gap-[4px]">
        <FilterButton
          filterFamilyId={filterFamilyId}
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
          filterFamilyId={filterFamilyId}
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
