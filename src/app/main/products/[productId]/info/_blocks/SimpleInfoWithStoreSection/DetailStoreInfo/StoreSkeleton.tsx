import PaddingWrapper from '@/shared/components/PaddingWrapper';
import Skeleton from '@/shared/components/Skeleton';
import React from 'react';

const StoreSkeleton = () => (
  <PaddingWrapper className="items-center justify-between border-b border-gray-100 py-[10px]">
    <div className="flex items-center gap-[4px]">
      <Skeleton className="aspect-auto size-[24px] rounded-full" />
      <Skeleton className="h-[24px] w-[25%] rounded-[4px]" />
    </div>
  </PaddingWrapper>
);

export default StoreSkeleton;
