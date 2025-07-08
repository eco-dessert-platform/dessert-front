import PaddingWrapper from '@/shared/components/PaddingWrapper';

import SkeletonStoreCard from './SkeletonStoreCard';

interface SkeletonStoreListProps {
  row?: number;
}

const SkeletonStoreList = ({ row = 6 }: SkeletonStoreListProps) => (
  <PaddingWrapper className="gap-x-[16px] gap-y-[16px] border-b border-gray-100 py-0">
    {Array.from({ length: row }, (_, idx) => idx + 1).map((item) => (
      <SkeletonStoreCard key={item} />
    ))}
  </PaddingWrapper>
);
export default SkeletonStoreList;
