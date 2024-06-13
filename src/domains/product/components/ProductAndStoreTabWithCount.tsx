'use client';

import { Suspense } from 'react';
import { useRecoilValue } from 'recoil';
import { filterValueState } from '@/domains/product/atoms';
import { FILTER_FAMILY_ID } from '@/domains/product/constants/filterFamilyID';
import { useGetAllProductsQuery } from '@/domains/product/queries/useGetAllProductsQuery';
import ProductAndStoreTab from '@/shared/components/ProductAndStoreTab';

const ProductAndStoreTabWithCount = () => {
  const filterValue = useRecoilValue(filterValueState(FILTER_FAMILY_ID.main));
  const { data } = useGetAllProductsQuery(filterValue);

  return (
    <Suspense>
      <ProductAndStoreTab productCount={data?.productCount} storeCount={data?.storeCount} />
    </Suspense>
  );
};

export default ProductAndStoreTabWithCount;
