'use client';

import { useId } from 'react';
import Link from 'next/link';
import { usePathname, useSearchParams } from 'next/navigation';
import { LayoutGroup } from 'framer-motion';
import TabButton from '@/shared/components/TabButton';

interface ProductAndStoreTabProps {
  defaultPath?: string;
  productCount?: number;
  storeCount?: number;
}

// count가 100 이상이면 '99+'를 반환
const checkCount = (count: number) => {
  const COUNT_LIMIT = 100;

  if (count >= COUNT_LIMIT) return '99+';
  return count;
};

const ProductAndStoreTab = ({
  defaultPath = '',
  productCount,
  storeCount
}: ProductAndStoreTabProps) => {
  const id = useId();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const productsPath = `${defaultPath}/products`;
  const storesPath = `${defaultPath}/stores`;

  const isProductPage = pathname.startsWith(productsPath);
  const isStorePage = pathname.startsWith(storesPath);

  const queryString = searchParams.toString();
  const productsUrl = queryString ? `${productsPath}?${queryString}` : productsPath;
  const storesUrl = queryString ? `${storesPath}?${queryString}` : storesPath;

  const productCountStr = typeof productCount === 'number' ? `(${checkCount(productCount)})` : '';
  const storeCountStr = typeof storeCount === 'number' ? `(${checkCount(storeCount)})` : '';

  return (
    <LayoutGroup id={id}>
      <div className="flex">
        <Link className="w-full" href={productsUrl}>
          <TabButton active={isProductPage}>상품{productCountStr}</TabButton>
        </Link>
        <Link className="w-full" href={storesUrl}>
          <TabButton active={isStorePage}>스토어{storeCountStr}</TabButton>
        </Link>
      </div>
    </LayoutGroup>
  );
};

export default ProductAndStoreTab;
