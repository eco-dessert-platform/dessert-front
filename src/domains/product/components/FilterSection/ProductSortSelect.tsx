'use client';

import { useRecoilState } from 'recoil';

import { filterValueState } from '@/domains/product/atoms';
import { FILTER_VALUES, INIT_FILTER_VALUE } from '@/domains/product/constants/filterValues';
import { FilterFamilyIDType } from '@/domains/product/types/filterType';
import Select from '@/shared/components/Select';

interface ProductSortSelectProps {
  filterFamilyId: FilterFamilyIDType;
}

const ProductSortSelect = ({ filterFamilyId }: ProductSortSelectProps) => {
  const [filterValue, setFilterValue] = useRecoilState(filterValueState(filterFamilyId));
  const selectedOption = filterValue.sort || INIT_FILTER_VALUE.sort;

  const handleSelectChange = (newSelectedOption: string) => {
    setFilterValue({ ...filterValue, sort: newSelectedOption });
  };

  return (
    <Select
      options={FILTER_VALUES.sorts.kind}
      selectedOption={selectedOption}
      onChange={handleSelectChange}
    />
  );
};

export default ProductSortSelect;
