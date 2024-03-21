'use client';

import { Suspense } from 'react';
import { useRecoilValue } from 'recoil';
import { useSearchParams } from 'next/navigation';
import { filterValueState } from '@/components/units/(main)/Products/atoms';
import { useGetSearchProductsQuery } from '@/components/units/Search/hooks/useGetSearchProductsQuery';
import { useGetSearchStoresQuery } from '@/components/units/Search/hooks/useGetSearchStoresQuery';
import ProductAndStoreTab from '@/components/commons/tabs/ProductAndStoreTab';

const ProductAndStoreTabWithCount = () => {
  const filterValue = useRecoilValue(filterValueState);
  const searchParams = useSearchParams();
  const keyword = searchParams.get('query') || '';

  const { itemCount: productCount } = useGetSearchProductsQuery({ keyword, filterValue });
  const { itemCount: storeCount } = useGetSearchStoresQuery({ keyword });

  return (
    <Suspense>
      <ProductAndStoreTab productCount={productCount} storeCount={storeCount} />
    </Suspense>
  );
};

export default ProductAndStoreTabWithCount;
