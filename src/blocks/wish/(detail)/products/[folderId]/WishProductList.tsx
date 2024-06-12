'use client';

import { useParams } from 'next/navigation';
import ProductCard from '@/domains/product/components/ProductCard';
import useWishProductListQuery from '@/domains/wish/queries/useWishProductListQuery';
import { BbangleIcon } from '@/shared/components/icons';
import SkeletonProductCardList from '@/domains/product/components/SkeletonProductCardList';
import PaddingWrapper from '@/shared/components/PaddingWrapper';
import { useInView } from 'react-intersection-observer';
import { useEffect } from 'react';

const WishProductList = () => {
  const { folderId } = useParams<{ folderId: string }>();
  const {
    data: wishProducts,
    hasNextPage,
    fetchNextPage
  } = useWishProductListQuery(Number(folderId));
  const { ref, inView } = useInView();

  useEffect(() => {
    if (inView) fetchNextPage();
  }, [inView, fetchNextPage]);

  if (!wishProducts || wishProducts?.length === 0) {
    return (
      <div className="text-gray-500 leading-150 text-[14px] mx-auto flex flex-col gap-[2px] justify-center items-center w-[360px] h-[360px]">
        <BbangleIcon shape="cry" />
        <div>찜한 상품이 없어요!</div>
      </div>
    );
  }

  return (
    <>
      <PaddingWrapper>
        <div className="grid grid-cols-2 gap-[16px]">
          {wishProducts.map((product) => (
            <ProductCard key={product.boardId} product={product} />
          ))}
        </div>
      </PaddingWrapper>
      {hasNextPage && (
        <div ref={ref}>
          <SkeletonProductCardList />
        </div>
      )}
    </>
  );
};

export default WishProductList;
