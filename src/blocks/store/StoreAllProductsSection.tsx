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
  if (!products || !storeInfo) return null;

  return (
    <PaddingWrapper>
      <h5 className="mb-[10px] typo-title-14-semibold text-gray-800">전체상품</h5>
      <div className="grid grid-cols-2 gap-x-[16px] gap-y-[16px] pb-[36px]">
        {products.map((product) => (
          <div key={product.boardId}>
            <ProductCard product={{ ...product, storeName: storeInfo.storeName }} />
          </div>
        ))}
      </div>
      {hasNextPage && (
        <div ref={ref} className="pb-[36px]">
          <SkeletonProductCardList row={1} col={2} />
        </div>
      )}
    </PaddingWrapper>
  );
};

export default StoreAllProductsSection;
