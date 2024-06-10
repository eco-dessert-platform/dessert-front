'use client';

import { MouseEventHandler } from 'react';

import Image from 'next/image';

import { IProductType } from '@/domains/product/types/productType';
import { BundleBadge } from '@/domains/product/components/ProductCard/ProductImage/BundleBadge';
import { RankingBadge } from '@/domains/product/components/ProductCard/ProductImage/RankingBadge';
import useAddWishProductMutation from '@/domains/wish/queries/useAddWishProductMutation';
import useDeleteWishProductMutation from '@/domains/wish/queries/useDeleteWishProductMutation';
import HeartButton from '@/shared/components/HeartButton';
import { selectedWishFolderState } from '@/domains/wish/atoms/wishFolder';
import { useRecoilValue } from 'recoil';

interface ProductImageProps {
  product: IProductType;
  popular?: boolean;
  ranking?: number;
}
const ProductImage = ({ product, popular, ranking }: ProductImageProps) => {
  const BLUR_DATA_URL =
    'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAFklEQVR42mN8//HLfwYiAOOoQvoqBABbWyZJf74GZgAAAABJRU5ErkJggg==';
  const selectedWishFolder = useRecoilValue(selectedWishFolderState);

  const { mutate: addMutate } = useAddWishProductMutation();
  const { mutate: deleteMutate } = useDeleteWishProductMutation();

  const like: MouseEventHandler<HTMLButtonElement> = (e) => {
    addMutate({ productId: String(product.boardId), folderId: selectedWishFolder });
    e.preventDefault();
  };

  const hate: MouseEventHandler<HTMLButtonElement> = (e) => {
    deleteMutate({ productId: String(product.boardId) });
    e.preventDefault();
  };

  return (
    <div className="w-full after:pb-[100%] bg-cover bg-center rounded-[6px] relative">
      <Image
        src={product.thumbnail}
        alt="상품사진"
        width={300}
        height={300}
        placeholder="blur"
        blurDataURL={BLUR_DATA_URL}
        className="rounded-[6px] aspect-square border-[1px] border-gray-100"
      />
      <div className="absolute bottom-[9px] right-[9px] h-[20px]">
        <HeartButton
          isActive={product.isWished}
          shape="shadow"
          onClick={product.isWished ? hate : like}
        />
      </div>
      <div className="absolute z-10 top-[6px] left-[6px] w-full flex gap-[6px]">
        {popular && <RankingBadge ranking={ranking} />}
        {product.isBundled && <BundleBadge />}
      </div>
    </div>
  );
};
export default ProductImage;
