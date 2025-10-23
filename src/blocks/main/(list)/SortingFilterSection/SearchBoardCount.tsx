'use client';

import { useSearchParams } from 'next/navigation';
import { useGetSearchProductsQuery } from '@/domains/search/queries/useGetSearchProductsQuery';
import { FILTER_FAMILY_ID } from '@/domains/product/constants/filterFamilyID';
import { useFilter } from '@/shared/hooks/useFilter';

const SearchBoardCount = () => {
  const [filterValue] = useFilter(FILTER_FAMILY_ID.search);
  const searchParams = useSearchParams();
  const query = searchParams.get('query');
  const { data } = useGetSearchProductsQuery({ keyword: query || '', filterValue });

  return <span className="typo-body-12-medium text-gray-800">총 {data?.boardsCount ?? ''}개</span>;
};

export default SearchBoardCount;
