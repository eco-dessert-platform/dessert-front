import { Suspense } from 'react';
import Link from 'next/link';
import PATH from '@/shared/constants/path';
import SkeletonProductCardList from '@/domains/product/components/SkeletonProductCardList';
import PaddingWrapper from '@/shared/components/PaddingWrapper';
import ProductsList from './ProductsList';

const BestProductsSection = () => (
  <section className="pb-[36px]">
    <PaddingWrapper className="flex justify-between">
      <div className="text-gray-900 typo-heading-18-semibold">인기상품</div>
      <Link href={PATH.mainProductList} className="text-gray-600 typo-body-11-semibold">
        더보기
      </Link>
    </PaddingWrapper>

    <Suspense fallback={<SkeletonProductCardList />}>
      <ProductsList />
    </Suspense>
  </section>
);

export default BestProductsSection;
