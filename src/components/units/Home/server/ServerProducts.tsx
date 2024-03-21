import Link from 'next/link';
import ProductsList from '../client/ProductsList';
import { Suspense } from 'react';
import { SkeletonProductList } from '@/components/commons/skeleton/SkeletonProductList';
import PaddingWrapper from '@/components/commons/PaddingWrapper';

const ServerProducts = async () => {
  return (
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
      <Suspense fallback={<SkeletonProductList />}>
        <ProductsList />
      </Suspense>
    </PaddingWrapper>
  );
};

export default ServerProducts;
