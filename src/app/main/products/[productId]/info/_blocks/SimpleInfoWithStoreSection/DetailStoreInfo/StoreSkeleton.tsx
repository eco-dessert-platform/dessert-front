import PaddingWrapper from '@/shared/components/PaddingWrapper';
import Skeleton from '@/shared/components/Skeleton';
import React from 'react';

const StoreSkeleton = () => (
    <PaddingWrapper className="py-[10px] border-b border-gray-100 items-center justify-between">
      <div className="flex gap-[4px] items-center">
        <Skeleton className="size-[24px] aspect-auto rounded-full" />
        <Skeleton className="w-[25%] h-[24px] rounded-[4px]" />
      </div>
    </PaddingWrapper>
  );

export default StoreSkeleton;
