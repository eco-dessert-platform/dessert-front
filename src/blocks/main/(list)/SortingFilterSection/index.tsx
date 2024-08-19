'use client';

import React from 'react';

import { useRecoilState } from 'recoil';

import { filterValueState } from '@/domains/product/atoms';
import { useGetBoardsCountQuery } from '@/domains/product/queries/useGetBoardsCountQuery';
import { FilterFamilyIDType } from '@/domains/product/types/filterType';
import { FILTER_VALUES, INIT_FILTER_VALUE } from '@/domains/product/constants/filterValues';
import { getIngredientTag, getPriceTag } from '@/domains/product/utils/getTag';
import { isEqual } from '@/domains/product/utils/isEqual';
import PaddingWrapper from '@/shared/components/PaddingWrapper';
import ProductSortSelect from './ProductSortSelect';
import FilterButton from './FilterButton';

interface Props {
  filterFamilyId: FilterFamilyIDType;
}

const SortingFilterSection = ({ filterFamilyId }: Props) => {
  const [filterValue, setFilterValue] = useRecoilState(filterValueState(filterFamilyId));
  const { sort, ...filterValueWithoutSort } = filterValue;
  const { data: boardsCount } = useGetBoardsCountQuery(filterValueWithoutSort);

  return (
    <PaddingWrapper className="flex flex-col gap-y-[10px] pb-[12px] border-b border-gray-100">
      <div className="flex justify-between items-center">
        <span className="text-gray-800 typo-body-12-medium">총 {boardsCount ?? ''}개</span>
        <ProductSortSelect filterFamilyId={filterFamilyId} />
      </div>
      <div className="flex gap-[4px]">
        <FilterButton
          filterFamilyId={filterFamilyId}
          text={
            filterValue.category === INIT_FILTER_VALUE.category
              ? FILTER_VALUES.category.name
              : filterValue.category
          }
          isFiltered={filterValue.category !== INIT_FILTER_VALUE.category}
          onReset={() => {
            setFilterValue((prev) => ({ ...prev, category: INIT_FILTER_VALUE.category }));
          }}
        />
        <FilterButton
          filterFamilyId={filterFamilyId}
          text={
            isEqual(filterValue.tags, INIT_FILTER_VALUE.tags)
              ? FILTER_VALUES.tags.name
              : getIngredientTag(filterValue.tags)
          }
          isFiltered={!isEqual(filterValue.tags, INIT_FILTER_VALUE.tags)}
          onReset={() => {
            setFilterValue((prev) => ({ ...prev, tags: INIT_FILTER_VALUE.tags }));
          }}
        />
        <FilterButton
          filterFamilyId={filterFamilyId}
          text={
            isEqual(filterValue.price, INIT_FILTER_VALUE.price)
              ? FILTER_VALUES.price.name
              : getPriceTag(filterValue.price)
          }
          isFiltered={!isEqual(filterValue.price, INIT_FILTER_VALUE.price)}
          onReset={() => {
            setFilterValue((prev) => ({ ...prev, price: INIT_FILTER_VALUE.price }));
          }}
        />
      </div>
    </PaddingWrapper>
  );
};
export default SortingFilterSection;
