import { Suspense } from 'react';

import Link from 'next/link';

import SkeletonProductCardList from '@/domains/product/components/SkeletonProductCardList';
import PaddingWrapper from '@/shared/components/PaddingWrapper';

import ProductsList from './ProductsList';

const BestProductsSection = async () => (
  <PaddingWrapper className="pb-[36px]">
    <div className="flex justify-between items-end py-[10px] ">
      <div className="font-semibold text-gray-500 text-20 leading-150 tracking-tight-2">Best</div>
      <Link
        href="/products"
        className="font-medium text-gray-400 text-12 leading-150 tracking-tight-2"
      >
        전체보기
      </Link>
    </div>
    <Suspense fallback={<SkeletonProductCardList />}>
      <ProductsList />
    </Suspense>
  </PaddingWrapper>
);

export default BestProductsSection;
