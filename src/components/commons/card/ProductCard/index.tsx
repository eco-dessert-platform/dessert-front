'use client';

import { IProductType } from '@/commons/types/productType';
import Link from 'next/link';

import { useState } from 'react';
import { ProductImage } from './client/ProductImage';
import { ProductSummary } from './client/ProductSummary';
import { ChooseWishListModal } from './client/ChooseWishListModal';
//import { BundleBadge } from '../../badge/BundleBadge';

interface ProductCardProps {
  product: IProductType;
  popular?: boolean;
  ranking?: number;
}

const ProductCard = ({ product, popular, ranking }: ProductCardProps) => {
  const [isModal, setIsModal] = useState(false);
  const [productId, setProductId] = useState<number>();

  return (
    <>
      <Link href={`/products/${product.boardId}`} className="relative">
        <ProductImage
          product={product}
          popular={popular}
          ranking={ranking}
          setIsModal={setIsModal}
          setProductId={setProductId}
        />
        <ProductSummary product={product} />
      </Link>
      {/* Todo. useModal 사용 */}
      {isModal && (
        <ChooseWishListModal isModal={isModal} setIsModal={setIsModal} productId={productId} />
      )}
    </>
  );
};

export default ProductCard;
