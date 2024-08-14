'use client';

import React from 'react';

import { useRecoilValue } from 'recoil';

import { filterValueState } from '@/domains/product/atoms';
import ProductSortSelect from '@/domains/product/components/FilterSection/ProductSortSelect';
import { useGetBoardsCountQuery } from '@/domains/product/queries/useGetBoardsCountQuery';
import { FilterFamilyIDType } from '@/domains/product/types/filterType';
import PaddingWrapper from '@/shared/components/PaddingWrapper';

import FilterButton from './FilterButton';

interface Props {
  filterFamilyId: FilterFamilyIDType;
}

const SortingFilterSection = ({ filterFamilyId }: Props) => {
  const filterValue = useRecoilValue(filterValueState(filterFamilyId));
  const { sort, ...filterValueWithoutSort } = filterValue;
  const { data: boardsCount } = useGetBoardsCountQuery(filterValueWithoutSort);

  return (
    <PaddingWrapper className="flex flex-col gap-y-[10px] pb-[12px] border-b border-gray-100">
      <div className="flex justify-between items-center">
        <span className="text-gray-800 typo-body-12-medium">{`총 ${boardsCount ?? ''}개`}</span>
        <ProductSortSelect filterFamilyId={filterFamilyId} />
      </div>
      <div className="flex gap-[4px]">
        <FilterButton text="카테고리" filterFamilyId={filterFamilyId} onReset={() => {}} />
        <FilterButton text="성분" filterFamilyId={filterFamilyId} onReset={() => {}} />
        <FilterButton text="가격" filterFamilyId={filterFamilyId} onReset={() => {}} />
      </div>
    </PaddingWrapper>
  );
};
export default SortingFilterSection;
