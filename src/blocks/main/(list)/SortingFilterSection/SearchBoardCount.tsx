'use client';

import { useSearchParams } from 'next/navigation';
import { useAtom } from 'jotai';
import { filterValueAtom } from '@/domains/product/atoms'; // Change to Jotai atom
import { useGetSearchProductsQuery } from '@/domains/search/queries/useGetSearchProductsQuery';

const SearchBoardCount = () => {
  const [filterValue] = useAtom(filterValueAtom);
  const searchParams = useSearchParams();
  const query = searchParams.get('query');
  const { data } = useGetSearchProductsQuery({ keyword: query || '', filterValue });

  return <span className="typo-body-12-medium text-gray-800">총 {data?.boardsCount ?? ''}개</span>;
};

export default SearchBoardCount;
