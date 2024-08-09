import React, { ReactNode } from 'react';

import productService from '@/domains/product/queries/service';
import Header from '@/shared/components/Header';
import { productQueryKey } from '@/shared/queries/queryKey';
import { HydrationBoundary, QueryClient, dehydrate } from '@tanstack/react-query';
import FixedPurchaseButtonSection from '@/blocks/main/(detail)/products/[productId]/info/FixedPurchaseButtonSection';
import ShareButton from '@/shared/components/ShareButton';
import ProductDetailTabs from './_blocks/ProductDetailTabs';

interface DetailInfoLayoutProps {
  params: { productId: string };
  children: ReactNode;
}

const DetailInfoLayout = async ({ params, children }: DetailInfoLayoutProps) => {
  const queryClient = new QueryClient();
  const [boardData, storeData] = await Promise.all([
    queryClient.fetchQuery({
      queryKey: productQueryKey.detail(Number(params.productId), 'board-detail'),
      queryFn: () => productService.getBoardDetail(params.productId)
    }),
    queryClient.fetchQuery({
      queryKey: productQueryKey.detail(Number(params.productId), 'store-info'),
      queryFn: () => productService.getStoreInfo(params.productId)
    }),
    queryClient.prefetchQuery({
      queryKey: productQueryKey.detail(Number(params.productId), 'product-option'),
      queryFn: () => productService.getProductOption(params.productId)
    })
  ]);

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <Header
        title={`[${storeData.title}] ${boardData.title}`}
        content={<ShareButton />}
        back
        className="sticky top-0 bg-white z-50"
      />
      <ProductDetailTabs />
      {children}
      <FixedPurchaseButtonSection />
    </HydrationBoundary>
  );
};

export default DetailInfoLayout;
