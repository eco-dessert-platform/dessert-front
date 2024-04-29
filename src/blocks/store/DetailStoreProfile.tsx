'use client';

import { useState } from 'react';

import { useGetStoreDetailQuery } from '@/domains/store/hooks/useGetStoreDetailQuery';
import StarButton from '@/shared/components/StarButton';

interface StoreProfileProps {
  storeId: number;
}

const DetailStoreProfile = ({ storeId }: StoreProfileProps) => {
  const { data } = useGetStoreDetailQuery(storeId);
  const [isLiked, setIsLiked] = useState(data?.store?.isWished || false);

  return (
    <div className="flex flex-col justify-center items-center gap-[10px]">
      <div
        className="w-[46px] h-[46px] bg-cover bg-center rounded-md"
        style={{ backgroundImage: `url(${data?.store.profile})` }}
      />
      <div className="flex flex-col gap-[4px]">
        <div className="w-full flex items-center justify-center gap-[2px]">
          <div className="text-gray-900 text-16 font-bold">{data?.store.storeName}</div>
          <StarButton isAcive={isLiked} onClick={() => setIsLiked(!isLiked)} />
        </div>
        <p className="text-center text-gray-600 text-12 font-normal">{data?.store.introduce}</p>
      </div>
    </div>
  );
};

export default DetailStoreProfile;
