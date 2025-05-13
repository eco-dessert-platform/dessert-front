import React, { ReactNode } from 'react';
// import productService from '@/domains/product/queries/service';
import Header from '@/shared/components/Header';
import DefaultLayout from '@/shared/components/DefaultLayout';
// import { productQueryKey } from '@/shared/queries/queryKey';
// import { HydrationBoundary, QueryClient, dehydrate } from '@tanstack/react-query';
import { GenerateMetadataProps } from '@/shared/types/generateMetadata';
import { getDynamicMetadata } from '@/shared/utils/metadata';

import ProductDetailTabs from './_blocks/ProductDetailTabs';
import FixedPurchaseButtonSection from './info/_blocks/FixedPurchaseButtonSection';

export const generateMetadata = async (props: GenerateMetadataProps) =>
  getDynamicMetadata('product-detail', props);

interface DetailInfoLayoutProps {
  // params: { productId: string };
  children: ReactNode;
}

const ProductDetailLayout = async ({ children }: DetailInfoLayoutProps) => (
  // const id = Number(productId);
  // const queryClient = new QueryClient();
  // const [boardData, storeData] = await Promise.all([
  //   queryClient.fetchQuery({
  //     queryKey: productQueryKey.detail(id, 'board-detail'),
  //     queryFn: () => productService.getBoardDetail(id)
  //   }),
  //   queryClient.fetchQuery({
  //     queryKey: productQueryKey.detail(id, 'store-info'),
  //     queryFn: () => productService.getStoreInfo(id)
  //   }),
  //   queryClient.prefetchQuery({
  //     queryKey: productQueryKey.detail(id, 'product-option'),
  //     queryFn: () => productService.getProductOption(id)
  //   })
  // ]);

  // <HydrationBoundary state={dehydrate(queryClient)}>
  <DefaultLayout
    header={
      <>
        <Header
          // title={`[${storeData.title}] ${boardData.title}`}
          back
          className="sticky top-0 bg-white z-50"
        />
        <ProductDetailTabs />
      </>
    }
    main={children}
    footer={<FixedPurchaseButtonSection />}
  />
  // </HydrationBoundary>
);
export default ProductDetailLayout;
