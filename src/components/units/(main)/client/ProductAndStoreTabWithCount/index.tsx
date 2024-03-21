'use client';

import { Suspense } from 'react';
import { useRecoilValue } from 'recoil';
import { filterValueState } from '@/components/units/(main)/Products/atoms';
import { useGetAllProductsQuery } from '@/components/units/(main)/Products/hooks/useGetAllProductsQuery';
import { useGetAllStoresQuery } from '@/components/units/(main)/Stores/hooks/useGetAllStoresQuery';
import ProductAndStoreTab from '@/components/commons/tabs/ProductAndStoreTab';

const ProductAndStoreTabWithCount = () => {
  const filterValue = useRecoilValue(filterValueState);

  const { itemCount: productCount } = useGetAllProductsQuery(filterValue);
  const { itemCount: storeCount } = useGetAllStoresQuery();

  return (
    <Suspense>
      <ProductAndStoreTab productCount={productCount} storeCount={storeCount} />
    </Suspense>
  );
};

export default ProductAndStoreTabWithCount;
