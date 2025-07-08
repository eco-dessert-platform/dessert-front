'use client';

import { MouseEventHandler, useState } from 'react';

import { useAtom } from 'jotai';

import { IProductType } from '@/domains/product/types/productType';
import { selectedWishFolderAtom } from '@/domains/wish/atoms/wishFolder';
import useAddWishProductMutation from '@/domains/wish/queries/useAddWishProductMutation';
import useDeleteWishProductMutation from '@/domains/wish/queries/useDeleteWishProductMutation';
import { isLoggedinAtom } from '@/shared/atoms/login';
import Badge from '@/shared/components/Badge';
import HeartButton from '@/shared/components/HeartButton';
import { BellIcon } from '@/shared/components/icons';
import ImageWithFallback from '@/shared/components/ImageWithFallback';
import SadBbangleBox from '@/shared/components/SadBbangleBox';
import { BLUR_DATA_URL } from '@/shared/constants/blurDataUrl';
import { ERROR_MESSAGE } from '@/shared/constants/error';
import useToastNewVer from '@/shared/hooks/useToastNewVer';
import { cn } from '@/shared/utils/cn';
import Link from 'next/link';
import PATH from '@/shared/constants/path';

interface ProductImageProps {
  product: IProductType;
  popular?: boolean;
  ranking?: number;
  isSimilarProduct?: boolean;
}

const ProductImage = ({
  product: { boardId, thumbnail, isWished, isBundled, isBbangcketing, isSoldOut },
  popular,
  ranking,
  isSimilarProduct
}: ProductImageProps) => {
  const [selectedWishFolder] = useAtom(selectedWishFolderAtom);
  const { openToast } = useToastNewVer();
  const [isPopping, setIsPopping] = useState(false);
  const { mutate: addMutate } = useAddWishProductMutation();
  const { mutate: deleteMutate } = useDeleteWishProductMutation();

  const [isLoggedIn] = useAtom(isLoggedinAtom);

  const like: MouseEventHandler<HTMLButtonElement> = (e) => {
    e.preventDefault();
    if (isLoggedIn) {
      addMutate({ productId: boardId, folderId: selectedWishFolder });
      setIsPopping(true);
    } else {
      openToast({
        message: ERROR_MESSAGE.requiredLogin,
        action: (
          <Link className="hover:underline" href={PATH.login}>
            로그인
          </Link>
        )
      });
    }
  };

  const hate: MouseEventHandler<HTMLButtonElement> = (e) => {
    e.preventDefault();
    deleteMutate({ productId: boardId });
    setIsPopping(false);
  };

  return (
    <div
      className={cn(
        'relative w-full rounded-[6px] bg-cover bg-center',
        isSoldOut &&
          "after:flex-center after:typo-heading-20-semibold after:absolute after:inset-0 after:size-full after:rounded-[6px] after:bg-black/[0.3] after:text-gray-300 after:content-['Sold_Out']"
      )}
    >
      <div className="relative aspect-square w-full">
        <ImageWithFallback
          src={thumbnail}
          alt="상품사진"
          className="rounded-[6px]"
          placeholder="blur"
          blurDataURL={BLUR_DATA_URL}
          fill
          sizes="(max-width: 610px) 50vw, 300px"
          fallback={
            <SadBbangleBox className="flex h-full w-full flex-col items-center justify-center rounded-[6px] border bg-gray-50">
              <p className="text-center text-sm md:text-base lg:text-lg">이미지가 없습니다.</p>
            </SadBbangleBox>
          }
        />
      </div>
      {isSimilarProduct || (
        <div className="absolute right-[9px] bottom-[9px] z-10 h-[20px]">
          <HeartButton
            isActive={isWished}
            className={isPopping ? 'animate-heart-pop' : ''}
            shape="shadow"
            onClick={isWished ? hate : like}
          />
        </div>
      )}

      <div className="absolute top-[6px] left-[6px] z-10 flex w-full flex-wrap gap-[6px]">
        {popular && <Badge type="ranking">{ranking}</Badge>}
        {isBundled && <Badge type="bundle">묶음상품</Badge>}
        {isBbangcketing && (
          <Badge type="bbangcketing">
            <BellIcon shape="on-12" />
            빵켓팅
          </Badge>
        )}
      </div>
    </div>
  );
};

export default ProductImage;
