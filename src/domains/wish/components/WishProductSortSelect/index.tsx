'use client';

import Select from '@/shared/components/Select';
import { useAtom } from 'jotai';
import { wishProductSortAtom } from '../../atoms/sort';
import { SORT_OPTIONS } from '../../constants';

const WishProductSortSelect = () => {
  const [sort, setSort] = useAtom(wishProductSortAtom);

  return (
    <Select options={SORT_OPTIONS} selectedOption={sort} onChange={(option) => setSort(option)} />
  );
};

export default WishProductSortSelect;