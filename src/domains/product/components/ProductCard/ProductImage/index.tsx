'use client';

import { MouseEventHandler } from 'react';

import Image from 'next/image';
import { useRecoilValue } from 'recoil';

import { IProductType } from '@/domains/product/types/productType';
import { selectedWishFolderState } from '@/domains/wish/atoms/wishFolder';
import useAddWishProductMutation from '@/domains/wish/queries/useAddWishProductMutation';
import useDeleteWishProductMutation from '@/domains/wish/queries/useDeleteWishProductMutation';
import HeartButton from '@/shared/components/HeartButton';
import Badge from '@/shared/components/Badge';
import { BellIcon } from '@/shared/components/icons';
import { cn } from '@/shared/utils/cn';

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
  const BLUR_DATA_URL =
    'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAFklEQVR42mN8//HLfwYiAOOoQvoqBABbWyZJf74GZgAAAABJRU5ErkJggg==';
  const selectedWishFolder = useRecoilValue(selectedWishFolderState);

  const { mutate: addMutate } = useAddWishProductMutation();
  const { mutate: deleteMutate } = useDeleteWishProductMutation();

  const like: MouseEventHandler<HTMLButtonElement> = (e) => {
    addMutate({ productId: boardId, folderId: selectedWishFolder });
    e.preventDefault();
  };

  const hate: MouseEventHandler<HTMLButtonElement> = (e) => {
    deleteMutate({ productId: boardId });
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
      <Image
        src={thumbnail}
        alt="상품사진"
        width={300}
        height={300}
        placeholder="blur"
        blurDataURL={BLUR_DATA_URL}
        className="rounded-[6px] aspect-square"
      />
      <div className="absolute bottom-[9px] right-[9px] h-[20px]">
        <HeartButton isActive={isWished} shape="shadow" onClick={isWished ? hate : like} />
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
