'use client';

import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';

import ProductCard from '@/domains/product/components/ProductCard';
import SkeletonProductCardList from '@/domains/product/components/SkeletonProductCardList';
import { useGetAllCategoryProductsQuery } from '@/domains/product/queries/useGetAllCategoryProductsQuery';
import { FILTER_FAMILY_ID } from '@/domains/product/constants/filterFamilyID';
import PaddingWrapper from '@/shared/components/PaddingWrapper';
import SadBbangleBox from '@/shared/components/SadBbangleBox';
import { useFilter } from '@/shared/hooks/useFilter';

const MainProductList = () => {
  const [filterValue] = useFilter(FILTER_FAMILY_ID.main);

  const { data, isFetching, isError, fetchNextPage, hasNextPage, isFetchingNextPage } =
    useGetAllCategoryProductsQuery(filterValue);

  const { ref, inView } = useInView();

  useEffect(() => {
    if (!inView) return;
    fetchNextPage();
  }, [inView, fetchNextPage]);

  if (isFetching && !isFetchingNextPage) {
    return (
      <PaddingWrapper>
        <SkeletonProductCardList />
      </PaddingWrapper>
    );
  }

  if (isError) {
    return (
      <SadBbangleBox className="h-[calc(100vh-270px)]">
        <p>오류가 발생했어요!</p>
      </SadBbangleBox>
    );
  }

  if (!data || data.products.length === 0) {
    return (
      <SadBbangleBox className="h-[calc(100vh-270px)]">
        <p>상품이 없어요!</p>
      </SadBbangleBox>
    );
  }

  return (
    <PaddingWrapper className="pb-[36px]">
      <div className="grid grid-cols-2 gap-[16px]">
        {data.products.map((product) => (
          <ProductCard key={product.boardId} product={product} />
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

export default MainProductList;
