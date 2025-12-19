'use client';

import { useGetBoardsCountQuery } from '@/domains/product/queries/useGetBoardsCountQuery';
import { FILTER_FAMILY_ID } from '@/domains/product/constants/filterFamilyID';
import { useFilter } from '@/shared/hooks/useFilter';

const MainBoardCount = () => {
  const [filterValue] = useFilter(FILTER_FAMILY_ID.main);

  const { sort, ...filterValueWithoutSort } = filterValue;
  const { data: boardsCount } = useGetBoardsCountQuery(filterValueWithoutSort);

  return <span className="typo-body-12-medium text-gray-800">총 {boardsCount ?? ''}개</span>;
};

export default MainBoardCount;
