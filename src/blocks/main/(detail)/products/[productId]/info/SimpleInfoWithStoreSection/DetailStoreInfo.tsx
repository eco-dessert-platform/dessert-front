'use client';

import { useState } from 'react';

import Image from 'next/image';
import Link from 'next/link';

import HeartButton from '@/shared/components/HeartButton';
import PaddingWrapper from '@/shared/components/PaddingWrapper';
import { INewStoreType } from '@/domains/store/types/store';

interface Props {
  storeData: INewStoreType;
}

const DetailStoreInfo = ({ storeData }: Props) => {
  const [isLiked, setIsLiked] = useState(storeData.isWished);

  const addStoreToWishList = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setIsLiked(!isLiked);
  };

  return (
    <Link href={`/stores/${storeData.id}`} className="w-full">
      <PaddingWrapper className="py-[10px] border-b border-gray-100 flex items-center justify-between">
        <div className="gap-[6px] items-center flex">
          <div className="overflow-hidden rounded-full">
            <Image src={storeData.profile} width={24} height={24} alt="설명" />
          </div>
          <div className="text-gray-600 text-14">{storeData.title}</div>
        </div>
        <HeartButton shape="default" isActive={isLiked} onClick={addStoreToWishList} />
      </PaddingWrapper>
    </Link>
  );
};
export default DetailStoreInfo;
