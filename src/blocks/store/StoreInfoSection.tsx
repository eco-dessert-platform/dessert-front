'use client';

import { useState } from 'react';
import { useGetStoreInfoQuery } from '@/domains/store/queries/useGetStoreInfoQuery';
import PaddingWrapper from '@/shared/components/PaddingWrapper';
import StarButton from '@/shared/components/StarButton';

interface Props {
  storeId: number;
}

// 스타일 수정해야함
// next.js Image로 변경

const StoreInfoSection = ({ storeId }: Props) => {
  const { data } = useGetStoreInfoQuery({ storeId });
  const [isLiked, setIsLiked] = useState(data?.isWished || false);

  return (
    <PaddingWrapper className="pt-0">
      <div className="flex flex-col justify-center items-center gap-[10px]">
        <div
          className="w-[46px] h-[46px] bg-cover bg-center rounded-md"
          style={{ backgroundImage: `url(${data?.profile})` }}
        />
        <div className="flex flex-col gap-[4px]">
          <div className="w-full flex items-center justify-center gap-[2px]">
            <div className="font-bold text-gray-900 text-16">{data?.storeName}</div>
            <StarButton isActive={isLiked} onClick={() => setIsLiked(!isLiked)} />
          </div>
          <p className="font-normal text-center text-gray-600 text-12">{data?.introduce}</p>
        </div>
      </div>
    </PaddingWrapper>
  );
};

export default StoreInfoSection;
