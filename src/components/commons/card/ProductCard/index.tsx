'use client';

import { IProductType } from '@/commons/types/productType';
import Link from 'next/link';

import { useState } from 'react';
import { IStoreType } from '@/commons/types/storeType';
import { RankingBadge } from './client/RankingBadge';
import { ProductImage } from './client/ProductImage';
import { ProductSummary } from './client/ProductSummary';
import { ChooseWishListModal } from './client/ChooseWishListModal';
import { BundleBadge } from '../../badge/BundleBadge';
import { isLoggedIn } from '@/commons/utils/isLoggedIn';

interface ProductCardProps {
  product: IProductType;
  storeData?: IStoreType;
  popular?: boolean;
  ranking?: number;
}

const ProductCard = ({ product, popular, ranking }: ProductCardProps) => {
  const [isModal, setIsModal] = useState(false);
  const [productId, setProductId] = useState<number>();

  return (
    <>
      <Link href={`/products/${product.boardId}`} className="w-full relative">
        <ProductImage product={product} setIsModal={setIsModal} setProductId={setProductId} />
        <div className="absolute z-10 top-[6px] h-5 w-full ">
          <RankingBadge popular={popular} ranking={ranking} />
          {product.isBundled && <BundleBadge />}
        </div>
        <ProductSummary product={product} />
      </Link>
      {isModal && isLoggedIn() && (
        <ChooseWishListModal isModal={isModal} setIsModal={setIsModal} productId={productId} />
      )}
    </>
  );
};

export default ProductCard;
