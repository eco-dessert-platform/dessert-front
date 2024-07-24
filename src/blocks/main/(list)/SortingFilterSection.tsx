'use client';

import React from 'react';

import { usePathname } from 'next/navigation';
import { useRecoilValue } from 'recoil';

import { filterValueState } from '@/domains/product/atoms';
import ProductSortSelect from '@/domains/product/components/FilterSection/ProductSortSelect';
import { FILTER_FAMILY_ID } from '@/domains/product/constants/filterFamilyID';
import { FILTER_VALUES } from '@/domains/product/constants/filterValues';
import { useGetAllCategoryProductsQuery } from '@/domains/product/queries/useGetAllCategoryProductsQuery';
import PaddingWrapper from '@/shared/components/PaddingWrapper';
import Select from '@/shared/components/Select';

interface Props {
  defaultPath?: string;
}

const SortingFilterSection = ({ defaultPath = '' }: Props) => {
  const filterValue = useRecoilValue(filterValueState(FILTER_FAMILY_ID.main));

  const { data } = useGetAllCategoryProductsQuery(filterValue);

  const pathname = usePathname();
  const storesPath = `${defaultPath}/stores`;

  const isStorePage = pathname.startsWith(storesPath);

  if (isStorePage) return null;
  return (
    <PaddingWrapper className="py-[12px] border-b border-gray-100 ">
      <div className="flex justify-between items-center">
        <span className="text-gray-800 typo-body-12-medium">총 {data?.totalCount}개</span>
        <ProductSortSelect filterFamilyId={FILTER_FAMILY_ID.main} />
      </div>
      <div className="flex gap-[4px]">
        <Select options={FILTER_VALUES.categories} selectedOption="카테고리" isOpenModal />
        <Select options={FILTER_VALUES.tags} selectedOption="성분" isOpenModal />
        <Select options={FILTER_VALUES.categories} selectedOption="가격" isOpenModal />
      </div>
    </PaddingWrapper>
  );
};
export default SortingFilterSection;
