'use client';

import Link from 'next/link';
import { FILTER_FAMILY_ID } from '@/domains/product/constants/filterFamilyID';
import { INIT_FILTER_VALUE } from '@/domains/product/constants/filterValues';
import { useFilter } from '@/shared/hooks/useFilter';

interface PopularKeywordProps {
  order: number;
  name: string;
}

const PopularKeyword = ({ order, name }: PopularKeywordProps) => {
  const [, setFilterValue] = useFilter(FILTER_FAMILY_ID.search);

  const handleClick = () => {
    setFilterValue(INIT_FILTER_VALUE);
  }

  return (
    <Link href={`/search/products?query=${name}`} className="flex items-center gap-[6px] py-[8px]" onClick={handleClick}>
    <p className="text-primary-orange-red typo-title-14-bold">{order}</p>
    <p className="typo-title-14-regular text-gray-900">{name}</p>
  </Link>
  );
};

export default PopularKeyword;
