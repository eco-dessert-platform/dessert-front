import PaddingWrapper from '@/shared/components/PaddingWrapper';

import SkeletonStoreCard from './SkeletonStoreCard';

interface SkeletonStoreListProps {
  row?: number;
}

const SkeletonStoreList = ({ row = 6 }: SkeletonStoreListProps) => (
  <PaddingWrapper className="gap-x-[16px] py-0 gap-y-[16px] border-b border-gray-100">
    {Array(row)
      .fill(0)
      .map((item) => (
        <SkeletonStoreCard key={item} />
      ))}
  </PaddingWrapper>
);
export default SkeletonStoreList;
