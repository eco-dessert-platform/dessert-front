'use client';

import { useRecoilValue } from 'recoil';
import { filterValueState } from '@/domains/product/atoms';
import { FILTER_FAMILY_ID } from '@/domains/product/constants/filterFamilyID';
import { useGetBoardsCountQuery } from '@/domains/product/queries/useGetBoardsCountQuery';

const MainBoardCount = () => {
  const filterValue = useRecoilValue(filterValueState(FILTER_FAMILY_ID.main));
  const { sort, ...filterValueWithoutSort } = filterValue;
  const { data: boardsCount } = useGetBoardsCountQuery(filterValueWithoutSort);

  return <span className="text-gray-800 typo-body-12-medium">총 {boardsCount ?? ''}개</span>;
};

export default MainBoardCount;
