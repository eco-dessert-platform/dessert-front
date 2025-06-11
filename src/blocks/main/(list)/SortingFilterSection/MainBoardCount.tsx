'use client';

import { useAtomValue } from 'jotai';
import { filterValueAtom } from '@/domains/product/atoms';
import { useGetBoardsCountQuery } from '@/domains/product/queries/useGetBoardsCountQuery';

const MainBoardCount = () => {
  const filterValue = useAtomValue(filterValueAtom);
  const { sort, ...filterValueWithoutSort } = filterValue;
  const { data: boardsCount } = useGetBoardsCountQuery(filterValueWithoutSort);

  return <span className="text-gray-800 typo-body-12-medium">총 {boardsCount ?? ''}개</span>;
};

export default MainBoardCount;
