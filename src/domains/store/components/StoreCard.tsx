'use client';

import Link from 'next/link';
import PaddingWrapper from '@/shared/components/PaddingWrapper';
import useAddWishStoreMutation from '@/domains/wish/queries/useAddWishStoreMutation';
import useDeleteWishStoreMutation from '@/domains/wish/queries/useDeleteWishStoreMutation';
import { BbangleIcon } from '@/shared/components/icons';
import HeartButton from '@/shared/components/HeartButton';
import { useState } from 'react';
import ImageWithFallback from '@/shared/components/ImageWithFallback';
import { BLUR_DATA_URL } from '@/shared/constants/blurDataUrl';

interface WishStroeProps {
  id: number;
  imgSrc: string;
  title: string;
  desc: string;
  isWished: boolean;
}

const StoreCard = ({ id, imgSrc, title, desc, isWished }: WishStroeProps) => {
  const [isWishedLocal, setIsWishedLocal] = useState(isWished);
  const { mutate: addMutate } = useAddWishStoreMutation({ storeId: id, storeName: title });
  const { mutate: deleteMutate } = useDeleteWishStoreMutation({ storeId: id, storeName: title });

  const like = () => {
    setIsWishedLocal(true);
    addMutate();
  };

  const hate = () => {
    setIsWishedLocal(false);
    deleteMutate();
  };

  return (
    <PaddingWrapper className="flex justify-between gap-[10px] border-b border-gray-100">
      <div className="h-[40px] w-[40px] shrink-0 rounded-[6px]">
        {imgSrc ? (
          <ImageWithFallback
            src={imgSrc}
            width={40}
            height={40}
            alt="store thumbnail"
            placeholder="blur"
            blurDataURL={BLUR_DATA_URL}
            fallback={
              <div className="typo-body-12-regular flex size-full items-center justify-center rounded-[6px] border bg-gray-50">
                <BbangleIcon shape="smile-small" />
              </div>
            }
          />
        ) : (
          <BbangleIcon shape="smile" />
        )}
      </div>

      <div className="flex w-full flex-col overflow-hidden">
        <div className="flex justify-between">
          <Link href={`/main/stores/${id}`} className="typo-title-14-semibold">
            {title}
          </Link>
          <HeartButton isActive={isWishedLocal} onClick={isWishedLocal ? hate : like} />
        </div>
        <p className="typo-body-12-regular truncate text-gray-600">{desc}</p>
      </div>
    </PaddingWrapper>
  );
};

export default StoreCard;
