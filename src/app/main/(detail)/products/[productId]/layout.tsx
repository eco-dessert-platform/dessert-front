import React, { ReactNode } from 'react';

import productService from '@/domains/product/queries/service';
import Header from '@/shared/components/Header';
import { ShareIcon } from '@/shared/components/icons';
import { productQueryKey } from '@/shared/queries/queryKey';
import { HydrationBoundary, QueryClient, dehydrate } from '@tanstack/react-query';
import ProductDetailTabs from './_blocks/ProductDetailTabs';

interface DetailInfoLayoutProps {
  params: { productId: string };
  children: ReactNode;
}

const DetailInfoLayout = async ({ params, children }: DetailInfoLayoutProps) => {
  const queryClient = new QueryClient();
  const [boardData, storeData] = await Promise.all([
    queryClient.fetchQuery({
      queryKey: productQueryKey.detail(Number(params.productId), 'board'),
      queryFn: () => productService.getBoardDetail(params.productId)
    }),
    queryClient.fetchQuery({
      queryKey: productQueryKey.detail(Number(params.productId), 'store'),
      queryFn: () => productService.getStoreInfo(params.productId)
    })
  ]);

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <Header
        title={`[${storeData.title}] ${boardData.title}`}
        content={
          <button type="button" aria-label="공유 버튼">
            <ShareIcon />
          </button>
        }
        back
      />
      <ProductDetailTabs />
      {children}
    </HydrationBoundary>
  );
};

export default DetailInfoLayout;
