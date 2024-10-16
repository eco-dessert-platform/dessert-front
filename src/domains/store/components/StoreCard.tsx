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
  const { mutate: addMutate } = useAddWishStoreMutation(id);
  const { mutate: deleteMutate } = useDeleteWishStoreMutation(id);

  const like = () => {
    setIsWishedLocal(true);
    addMutate();
  };

  const hate = () => {
    setIsWishedLocal(false);
    deleteMutate();
  };

  return (
    <PaddingWrapper className="flex gap-[10px] justify-between border-b border-gray-100">
      <div className="w-[40px] h-[40px] rounded-[6px] shrink-0">
        {imgSrc ? (
          <ImageWithFallback
            src={imgSrc}
            width={40}
            height={40}
            alt="store thumbnail"
            placeholder="blur"
            blurDataURL={BLUR_DATA_URL}
            fallback={
              <div className="border bg-gray-50 rounded-[6px] size-full typo-body-12-regular flex items-center justify-center">
                <BbangleIcon shape="smile-small" />
              </div>
            }
          />
        ) : (
          <BbangleIcon shape="smile" />
        )}
      </div>

      <div className="flex flex-col w-full overflow-hidden">
        <div className="flex justify-between">
          <Link href={`/main/stores/${id}`} className="typo-title-14-semibold">
            {title}
          </Link>
          <HeartButton isActive={isWishedLocal} onClick={isWishedLocal ? hate : like} />
        </div>
        <p className="text-gray-600 truncate typo-body-12-regular">{desc}</p>
      </div>
    </PaddingWrapper>
  );
};

export default StoreCard;
