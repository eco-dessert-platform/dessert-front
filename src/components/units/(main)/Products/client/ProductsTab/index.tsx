'use client';

import { useRecoilValue } from 'recoil';
import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import { useGetAllProductsQuery } from '../../hooks/useGetAllProductsQuery';
import { filterValueState } from '@/components/units/(main)/Products/atoms';
import ProductCard from '@/components/commons/card/ProductCard';
import Loading from '@/components/commons/Loading';
import PaddingWrapper from '@/components/commons/PaddingWrapper';

const ProductsTab = () => {
  const filterValue = useRecoilValue(filterValueState);
  const { products, isError, isLoading, fetchNextPage, isFetchingNextPage } =
    useGetAllProductsQuery(filterValue);
  const { ref, inView } = useInView();

  useEffect(() => {
    if (!inView) return;
    fetchNextPage();
  }, [inView, fetchNextPage]);

  if (isLoading) {
    return <Loading />;
  }
  if (isError) {
    return <div className="p-[16px]">Error</div>;
  }

  return (
    <PaddingWrapper className="grid grid-cols-2 gap-x-[16px] gap-y-[16px] pb-[36px]">
      {products && products.map(product => <ProductCard key={product.boardId} product={product} />)}
      {isFetchingNextPage ? <Loading /> : <div ref={ref}></div>}
    </PaddingWrapper>
  );
};

export default ProductsTab;
