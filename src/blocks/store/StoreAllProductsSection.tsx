'use client';

import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import { IStoreType } from '@/domains/store/types/store';
import { useGetStoreAllProductsQuery } from '@/domains/store/queries/useGetStoreAllProductsQuery';
import PaddingWrapper from '@/shared/components/PaddingWrapper';
import ProductCard from '@/domains/product/components/ProductCard';
import SadBbangleBox from '@/shared/components/SadBbangleBox';
import SkeletonProductCardList from '@/domains/product/components/SkeletonProductCardList';

interface Props {
  storeInfo: IStoreType;
}

const StoreAllProductsSection = ({ storeInfo: { storeId, storeName } }: Props) => {
  const {
    data: products,
    isError,
    fetchNextPage,
    hasNextPage
  } = useGetStoreAllProductsQuery({ storeId });
  const { ref, inView } = useInView();

  useEffect(() => {
    if (!inView) return;
    fetchNextPage();
  }, [inView, fetchNextPage]);

  if (isError) {
    return (
      <SadBbangleBox>
        <p>오류가 발생했어요!</p>
      </SadBbangleBox>
    );
  }
  if (!products || products.length === 0) {
    return (
      <SadBbangleBox>
        <p>상품이 없어요!</p>
      </SadBbangleBox>
    );
  }

  return (
    <PaddingWrapper className="pb-[36px]">
      <h5 className="mb-[10px] typo-title-14-semibold text-gray-800">전체상품</h5>
      <div className="grid grid-cols-2 gap-[16px]">
        {products.map((product) => (
          <ProductCard key={product.boardId} product={{ ...product, storeId, storeName }} />
        ))}
      </div>
      {hasNextPage && (
        <div ref={ref} className="pt-[16px]">
          <SkeletonProductCardList row={1} col={2} />
        </div>
      )}
    </PaddingWrapper>
  );
};

export default StoreAllProductsSection;
