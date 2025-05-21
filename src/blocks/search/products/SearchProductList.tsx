'use client';

import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import { useAtomValue } from 'jotai';
import SkeletonProductCardList from '@/domains/product/components/SkeletonProductCardList';
import { filterValueAtom } from '@/domains/product/atoms';
import ProductCard from '@/domains/product/components/ProductCard';
import { useGetSearchProductsQuery } from '@/domains/search/queries/useGetSearchProductsQuery';
import PaddingWrapper from '@/shared/components/PaddingWrapper';
import SadBbangleBox from '@/shared/components/SadBbangleBox';

interface SearchProductListProps {
  keyword: string;
}

const SearchProductList = ({ keyword }: SearchProductListProps) => {
  const filterValue = useAtomValue(filterValueAtom);

  const { data, isLoading, isError, fetchNextPage, hasNextPage, isFetchingNextPage } =
    useGetSearchProductsQuery({ keyword, filterValue });

  const { ref, inView } = useInView();

  useEffect(() => {
    if (inView && hasNextPage && !isFetchingNextPage) {
      fetchNextPage();
    }
  }, [inView, hasNextPage, isFetchingNextPage, fetchNextPage]);

  if (isLoading) {
    return (
      <PaddingWrapper>
        <SkeletonProductCardList />
      </PaddingWrapper>
    );
  }

  if (isError) {
    return (
      <SadBbangleBox className="h-[calc(100vh-220px)]">
        <p>오류가 발생했어요!</p>
      </SadBbangleBox>
    );
  }

  const products = data?.products ?? [];

  if (products.length === 0) {
    return (
      <SadBbangleBox className="h-[calc(100vh-220px)]">
        <p>{keyword}에 대한 검색 결과가 없어요.</p>
        <p>다른 키워드로 검색해보세요!</p>
      </SadBbangleBox>
    );
  }

  return (
    <PaddingWrapper className="pb-[36px]">
      <div className="grid grid-cols-2 gap-[16px]">
        {products.map((product) => (
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

export default SearchProductList;
