'use client';

import Link from 'next/link';

import ProductImage from '@/domains/product/components/ProductCard/ProductImage';
import ProductSummary from '@/domains/product/components/ProductCard/ProductSummary';
import { IProductType } from '@/domains/product/types/productType';

interface ProductCardProps {
  product: IProductType;
  popular?: boolean;
  ranking?: number;
}

const ProductCard = ({ product, popular, ranking }: ProductCardProps) => (
  <Link href={`/main/products/${product.boardId}/info`} className="relative">
    <ProductImage product={product} popular={popular} ranking={ranking} />
    <ProductSummary product={product} />
  </Link>
);

export default ProductCard;
