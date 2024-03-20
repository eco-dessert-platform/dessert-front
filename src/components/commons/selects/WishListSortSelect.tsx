'use client';

import Select from '@/components/commons/selects/Select';

interface WishListSortSelectProps {
  sort: string;
  setSort: (_s: string) => void;
}

const OPTIONS = ['담은순', '인기순', '저가순'];

const WishListSortSelect = ({ sort, setSort }: WishListSortSelectProps) => {
  const handleSelectChange = (newSelectedOption: string) => {
    setSort(newSelectedOption);
  };

  return <Select options={OPTIONS} selectedOption={sort} onChange={handleSelectChange} />;
};

export default WishListSortSelect;
