'use client';

import { useState } from 'react';
import Image from 'next/image';
import { IStoreType } from '@/domains/store/types/store';
import PaddingWrapper from '@/shared/components/PaddingWrapper';
import StarButton from '@/shared/components/StarButton';

interface Props {
  storeInfo: IStoreType;
}

const StoreInfoSection = ({ storeInfo }: Props) => {
  const [isLiked, setIsLiked] = useState(storeInfo?.isWished || false);

  if (!storeInfo) return null;

  return (
    <PaddingWrapper className="pt-0">
      <div className="flex flex-col justify-center items-center gap-[10px]">
        <Image
          src={storeInfo.profile}
          alt="스토어 이미지"
          width={46}
          height={46}
          className="rounded-[6px]"
          unoptimized
        />
        <div className="flex flex-col items-center gap-[4px]">
          <div className="flex items-center gap-[2px]">
            <h2 className="typo-title-16-semibold text-gray-900">{storeInfo.storeName}</h2>
            <StarButton isActive={isLiked} onClick={() => setIsLiked(!isLiked)} />
          </div>
          <p className="typo-body-12-regular">{storeInfo.introduce}</p>
        </div>
      </div>
    </PaddingWrapper>
  );
};

export default StoreInfoSection;
