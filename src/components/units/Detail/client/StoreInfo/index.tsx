'use client';
import BtnStar from '@/components/commons/button/client/Btn_start';
import Image from 'next/image';
import { useState } from 'react';
import { IProductDetailType } from '../../types';
import Link from 'next/link';
import PaddingWrapper from '@/components/commons/PaddingWrapper';

interface ProductsProps {
  store: IProductDetailType['store'];
}

function StoreInfo({ store }: ProductsProps) {
  const [isLiked, setIsLiked] = useState(store.isWished);

  const addStoreToWishList = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setIsLiked(!isLiked);
  };

  return (
    <Link href={`/stores/${store.storeId}`} className="w-full">
      <PaddingWrapper className="py-[13.5px] flex items-center justify-between">
        <div className="gap-[6px] items-center flex">
          <div className="rounded-full overflow-hidden">
            <Image src={store.profile} width={24} height={24} alt="설명" />
          </div>
          <div className="text-gray-600 text-14">{store.storeName}</div>
        </div>
        <BtnStar isLiked={isLiked} onClick={addStoreToWishList} />
      </PaddingWrapper>
    </Link>
  );
}
export default StoreInfo;
