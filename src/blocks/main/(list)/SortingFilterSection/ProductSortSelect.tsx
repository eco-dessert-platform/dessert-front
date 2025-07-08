'use client';

import { useAtom } from 'jotai';

import { filterValueAtom } from '@/domains/product/atoms';
import { FILTER_VALUES, INIT_FILTER_VALUE } from '@/domains/product/constants/filterValues';
import Select from '@/shared/components/Select';

const ProductSortSelect = () => {
  const [filterValue, setFilterValue] = useAtom(filterValueAtom);
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
