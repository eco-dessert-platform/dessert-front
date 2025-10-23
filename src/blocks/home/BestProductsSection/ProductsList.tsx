'use client';

import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';

import ProductCard from '@/domains/product/components/ProductCard';
import SkeletonProductCardList from '@/domains/product/components/SkeletonProductCardList';
import { useGetAllCategoryProductsQuery } from '@/domains/product/queries/useGetAllCategoryProductsQuery';
import { IProductType } from '@/domains/product/types/productType';
import { FILTER_FAMILY_ID } from '@/domains/product/constants/filterFamilyID';
import PaddingWrapper from '@/shared/components/PaddingWrapper';
import SadBbangleBox from '@/shared/components/SadBbangleBox';
import { useFilter } from '@/shared/hooks/useFilter';

const ProductsList = () => {
  const [filterValue] = useFilter(FILTER_FAMILY_ID.home);

  const allCategoryQuery = useGetAllCategoryProductsQuery(filterValue);
  const { data, isFetching, isError, fetchNextPage, hasNextPage, isFetchingNextPage } =
    allCategoryQuery;

  const { ref, inView } = useInView();

  useEffect(() => {
    if (!inView) return;
    fetchNextPage();
  }, [inView, fetchNextPage]);

  if (isFetching && !isFetchingNextPage) {
    return (
      <PaddingWrapper className="flex flex-col gap-y-[16px]">
        <SkeletonProductCardList row={1} col={3} />
        <SkeletonProductCardList row={1} col={2} />
      </PaddingWrapper>
    );
  }
  if (isError) {
    return (
      <SadBbangleBox className="py-[50px]">
        <p>오류가 발생했어요!</p>
      </SadBbangleBox>
    );
  }
  if (!data || data.products.length === 0) {
    return (
      <SadBbangleBox className="py-[50px]">
        <p>상품이 없어요!</p>
      </SadBbangleBox>
    );
  }

  return (
    <PaddingWrapper className="pb-[36px]">
      <div className="grid grid-cols-3 gap-x-[10px] pb-[16px]">
        {data.products.slice(0, 3).map((product: IProductType, index: number) => {
          const { tags, reviewRate, reviewCount, ...rest } = product;
          return (
            <ProductCard key={String(product.boardId)} product={rest} popular ranking={index + 1} />
          );
        })}
      </div>
      <div className="grid grid-cols-2 gap-[16px]">
        {data.products.slice(3).map((product: IProductType) => (
          <ProductCard key={String(product.boardId)} product={product} />
        ))}
        {hasNextPage && <SkeletonProductCardList row={1} col={1} />}
      </div>
      {hasNextPage && (
        <div ref={ref} className="pt-[16px]">
          <SkeletonProductCardList row={1} col={2} />
        </div>
      )}
    </PaddingWrapper>
  );
};

export default ProductsList;
