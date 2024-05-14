import { Suspense } from 'react';

import Link from 'next/link';

import SkeletonProductCardList from '@/domains/product/components/SkeletonProductCardList';
import PaddingWrapper from '@/shared/components/PaddingWrapper';

import ProductsList from './ProductsList';

const BestProductsSection = async () => (
  <PaddingWrapper className="pb-[36px]">
    <div className="flex justify-between items-end py-[10px]">
      <div className="text-gray-500 typo-heading-20-semibold">Best</div>
      <Link href="/products" className="text-gray-400 typo-body-12-medium">
        전체보기
      </Link>
    </div>
    <Suspense fallback={<SkeletonProductCardList />}>
      <ProductsList />
    </Suspense>
  </PaddingWrapper>
);

export default BestProductsSection;
