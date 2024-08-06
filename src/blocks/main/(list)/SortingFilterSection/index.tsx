'use client';

import React from 'react';

import { useRecoilValue } from 'recoil';

import { filterValueState } from '@/domains/product/atoms';
import ProductSortSelect from '@/domains/product/components/FilterSection/ProductSortSelect';
import { FILTER_FAMILY_ID } from '@/domains/product/constants/filterFamilyID';
import { FILTER_VALUES } from '@/domains/product/constants/filterValues';
import { useGetAllCategoryProductsQuery } from '@/domains/product/queries/useGetAllCategoryProductsQuery';
import { FilterFamilyIDType } from '@/domains/product/types/filterType';
import PaddingWrapper from '@/shared/components/PaddingWrapper';

import FilterButton from './FilterButton';

interface Props {
  filterFamilyId: FilterFamilyIDType;
}

const SortingFilterSection = ({ filterFamilyId }: Props) => {
  const filterValue = useRecoilValue(filterValueState(filterFamilyId));

  const { data } = useGetAllCategoryProductsQuery(filterValue);

  return (
    <PaddingWrapper className="py-[12px] border-b border-gray-100 ">
      <div className="flex justify-between items-center">
        <span className="text-gray-800 typo-body-12-medium">총 {data?.totalCount}개</span>
        <ProductSortSelect filterFamilyId={FILTER_FAMILY_ID.main} />
      </div>
      <div className="flex gap-[4px]">
        <FilterButton
          options={FILTER_VALUES.categories}
          selectedOption={filterValue.category || '카테고리'}
          isOpenModal
          className="border-primaryOrangeRed text-primaryOrangeRed"
        />
        <FilterButton options={FILTER_VALUES.tags} selectedOption="성분" isOpenModal />
        <FilterButton options={FILTER_VALUES.categories} selectedOption="가격" isOpenModal />
      </div>
    </PaddingWrapper>
  );
};
export default SortingFilterSection;
