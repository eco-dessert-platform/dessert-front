'use client';

import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import { useGetStoreInfoQuery } from '@/domains/store/queries/useGetStoreInfoQuery';
import { useGetStoreAllProductsQuery } from '@/domains/store/queries/useGetStoreAllProductsQuery';
import PaddingWrapper from '@/shared/components/PaddingWrapper';
import ProductCard from '@/domains/product/components/ProductCard';
import SadBbangleBox from '@/shared/components/SadBbangleBox';
import SkeletonProductCardList from '@/domains/product/components/SkeletonProductCardList';

interface Props {
  storeId: number;
}

const StoreAllProductsSection = ({ storeId }: Props) => {
  const {
    data: products,
    isError,
    fetchNextPage,
    hasNextPage
  } = useGetStoreAllProductsQuery({ storeId });
  const { data: storeInfo } = useGetStoreInfoQuery({ storeId });
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
  if (!storeInfo || !products || products.length === 0) {
    return (
      <SadBbangleBox>
        <p>상품이 없어요!</p>
      </SadBbangleBox>
    );
  }

  return (
    <PaddingWrapper className="px-0 pb-[36px]">
      <h5 className="mb-[10px] px-[16px] typo-title-14-semibold text-gray-800">전체상품</h5>
      <div className="grid grid-cols-2 gap-x-[16px] gap-y-[16px] px-[16px]">
        {products.map((product) => (
          <ProductCard
            key={product.boardId}
            product={{ ...product, storeId: storeInfo.storeId, storeName: storeInfo.storeName }}
          />
        ))}
      </div>
      {hasNextPage && (
        <div ref={ref}>
          <SkeletonProductCardList row={1} col={2} />
        </div>
      )}
    </PaddingWrapper>
  );
};

export default StoreAllProductsSection;
