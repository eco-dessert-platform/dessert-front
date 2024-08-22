'use client';

import React from 'react';

import { useRecoilValue } from 'recoil';

import { filterValueState } from '@/domains/product/atoms';
import ProductSortSelect from '@/domains/product/components/FilterSection/ProductSortSelect';
import { FILTER_FAMILY_ID } from '@/domains/product/constants/filterFamilyID';
import { useGetBoardsCountQuery } from '@/domains/product/queries/useGetBoardsCountQuery';
import { FilterFamilyIDType } from '@/domains/product/types/filterType';
import PaddingWrapper from '@/shared/components/PaddingWrapper';

import FilterButton from './FilterButton';

interface Props {
  filterFamilyId: FilterFamilyIDType;
}

const SortingFilterSection = ({ filterFamilyId }: Props) => {
  const filterValue = useRecoilValue(filterValueState(filterFamilyId));

  const { data: countData, isLoading, isError } = useGetBoardsCountQuery(filterValue);

  return (
    <PaddingWrapper className="py-[12px] border-b border-gray-100 ">
      <div className="flex justify-between items-center">
        <span className="text-gray-800 typo-body-12-medium">
          {isLoading ? '로딩 중...' : `총 ${countData}개`}
          {isError && '[error]'}
        </span>
        <ProductSortSelect filterFamilyId={FILTER_FAMILY_ID.main} />
      </div>
      <div className="flex gap-[4px]">
        <FilterButton filterType="category" defaultTitle="카테고리" />
        <FilterButton filterType="tags" defaultTitle="성분" />
        <FilterButton filterType="price" defaultTitle="가격" />
      </div>
    </PaddingWrapper>
  );
};
export default SortingFilterSection;
