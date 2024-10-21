'use client';

import { MouseEventHandler, useState } from 'react';

import { useRecoilValue } from 'recoil';

import { IProductType } from '@/domains/product/types/productType';
import { selectedWishFolderState } from '@/domains/wish/atoms/wishFolder';
import useAddWishProductMutation from '@/domains/wish/queries/useAddWishProductMutation';
import useDeleteWishProductMutation from '@/domains/wish/queries/useDeleteWishProductMutation';
import { isLoggedinState } from '@/shared/atoms/login';
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
}
const ProductImage = ({
  product: { boardId, thumbnail, isWished, isBundled, isBbangcketing, isSoldOut },
  popular,
  ranking
}: ProductImageProps) => {
  const selectedWishFolder = useRecoilValue(selectedWishFolderState);
  const { openToast } = useToastNewVer();
  const [isPopping, setIsPopping] = useState(false);
  const { mutate: addMutate } = useAddWishProductMutation();
  const { mutate: deleteMutate } = useDeleteWishProductMutation();

  const isLoggedIn = useRecoilValue(isLoggedinState);

  const like: MouseEventHandler<HTMLButtonElement> = (e) => {
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
    e.preventDefault();
  };

  const hate: MouseEventHandler<HTMLButtonElement> = (e) => {
    deleteMutate({ productId: boardId });
    setIsPopping(false);
    e.preventDefault();
  };

  return (
    <div
      className={cn(
        'w-full bg-cover bg-center rounded-[6px] relative',
        isSoldOut &&
          "after:content-['Sold_Out'] after:size-full after:flex-center after:absolute after:inset-0 after:bg-black/[0.3] after:text-gray-300 after:typo-heading-20-semibold after:rounded-[6px]"
      )}
    >
      <div className="relative w-full aspect-square">
        <ImageWithFallback
          src={thumbnail}
          alt="상품사진"
          placeholder="blur"
          blurDataURL={BLUR_DATA_URL}
          fill
          fallback={
            <SadBbangleBox className="flex flex-col items-center justify-center border bg-gray-50 rounded-[6px] w-full h-full">
              <p className="text-center text-sm md:text-base lg:text-lg">이미지가 없습니다.</p>
            </SadBbangleBox>
          }
        />
      </div>
      <div className="absolute z-10 bottom-[9px] right-[9px] h-[20px] ">
        <HeartButton
          isActive={isWished}
          className={isPopping ? 'animate-heart-pop' : ''}
          shape="shadow"
          onClick={isWished ? hate : like}
        />
      </div>
      <div className="absolute z-10 top-[6px] left-[6px] w-full flex flex-wrap gap-[6px]">
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
