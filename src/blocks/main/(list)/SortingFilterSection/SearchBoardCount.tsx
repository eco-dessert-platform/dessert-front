'use client';

import { useSearchParams } from 'next/navigation';
import { useRecoilValue } from 'recoil';
import { filterValueState } from '@/domains/product/atoms';
import { FILTER_FAMILY_ID } from '@/domains/product/constants/filterFamilyID';
import { useGetSearchProductsQuery } from '@/domains/search/queries/useGetSearchProductsQuery';

const SearchBoardCount = () => {
  const filterValue = useRecoilValue(filterValueState(FILTER_FAMILY_ID.search));
  const searchParams = useSearchParams();
  const query = searchParams.get('query');
  const { data } = useGetSearchProductsQuery({ keyword: query || '', filterValue });

  return <span className="text-gray-800 typo-body-12-medium">총 {data?.boardsCount ?? ''}개</span>;
};

export default SearchBoardCount;
