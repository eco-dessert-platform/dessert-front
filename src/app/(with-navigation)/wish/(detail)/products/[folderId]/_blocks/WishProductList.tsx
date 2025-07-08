'use client';

import { useParams } from 'next/navigation';
import ProductCard from '@/domains/product/components/ProductCard';
import useWishProductListQuery from '@/domains/wish/queries/useWishProductListQuery';
import { BbangleIcon } from '@/shared/components/icons';
import SkeletonProductCardList from '@/domains/product/components/SkeletonProductCardList';
import PaddingWrapper from '@/shared/components/PaddingWrapper';
import { useInView } from 'react-intersection-observer';
import { useEffect } from 'react';
import { useAtom } from 'jotai';
import { wishProductSortAtom } from '@/domains/wish/atoms/sort';
import { wishSortDictionary } from '@/domains/wish/constants';

const WishProductList = () => {
  const { folderId } = useParams<{ folderId: string }>();
  const [sortOptionKr] = useAtom(wishProductSortAtom);
  const sortOptionEng = wishSortDictionary.translate(sortOptionKr);
  const {
    data: wishProducts,
    hasNextPage,
    fetchNextPage
  } = useWishProductListQuery({ folderId: Number(folderId), sort: sortOptionEng });
  const { ref, inView } = useInView();

  useEffect(() => {
    if (inView) fetchNextPage();
  }, [inView, fetchNextPage]);

  if (!wishProducts || wishProducts?.length === 0) {
    return (
      <div className="mx-auto flex h-[360px] w-[360px] flex-col items-center justify-center gap-[2px] text-[14px] leading-150 text-gray-500">
        <BbangleIcon shape="cry" />
        <div>찜한 상품이 없어요!</div>
      </div>
    );
  }

  return (
    <PaddingWrapper>
      <div className="grid grid-cols-2 gap-[16px]">
        {wishProducts.map((product) => (
          <ProductCard key={product.boardId} product={product} />
        ))}
      </div>
      {hasNextPage && (
        <div ref={ref} className="pt-[16px]">
          <SkeletonProductCardList />
        </div>
      )}
    </PaddingWrapper>
  );
};

export default WishProductList;
