'use client';

import { useRecoilState } from 'recoil';

import { filterValueState } from '@/domains/product/atoms';
import { FILTER_VALUES } from '@/domains/product/constants/filterValues';
import { FilterFamilyIDType } from '@/domains/product/types/filterType';
import Select from '@/shared/components/Select';

interface ProductSortSelectProps {
  filterFamilyId: FilterFamilyIDType;
}

const ProductSortSelect = ({ filterFamilyId }: ProductSortSelectProps) => {
  const [filterValue, setFilterValue] = useRecoilState(filterValueState(filterFamilyId));
  const selectedOption = filterValue.sort;

  const handleSelectChange = (newSelectedOption: string) => {
    setFilterValue({ ...filterValue, sort: newSelectedOption });
  };

  return (
    <Select
      className="border-0 typo-body-12-medium"
      options={FILTER_VALUES.sorts}
      selectedOption={selectedOption}
      onChange={handleSelectChange}
    />
  );
};

export default ProductSortSelect;
