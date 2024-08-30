import type { Metadata } from 'next';
import React, { ReactNode } from 'react';
import productService from '@/domains/product/queries/service';
import Header from '@/shared/components/Header';
import { productQueryKey } from '@/shared/queries/queryKey';
import { HydrationBoundary, QueryClient, dehydrate } from '@tanstack/react-query';
import FixedPurchaseButtonSection from '@/blocks/main/(detail)/products/[productId]/info/FixedPurchaseButtonSection';
import ShareButton from '@/app/main/(detail)/products/[productId]/_blocks/ShareButton';
import ProductDetailTabs from './_blocks/ProductDetailTabs';

export async function generateMetadata({
  params: { productId }
}: {
  params: { productId: string };
}): Promise<Metadata> {
  const product = await productService.getBoardDetail(productId);
  const store = await productService.getStoreInfo(productId);
  const productOptions = await productService.getProductOption(productId);
  return {
    title: `[${store.title}] ${product.title}`,
    description: productOptions.products.map((item) => item.title).join(', '),
    openGraph: {
      title: '빵그리의 오븐',
      description: `[${store.title}] ${product.title}`,
      images: [
        {
          url: product.profile,
          alt: 'product image'
        }
      ]
    }
  };
}

interface DetailInfoLayoutProps {
  params: { productId: string };
  children: ReactNode;
}

const DetailInfoLayout = async ({ params: { productId }, children }: DetailInfoLayoutProps) => {
  const queryClient = new QueryClient();
  const [boardData, storeData] = await Promise.all([
    queryClient.fetchQuery({
      queryKey: productQueryKey.detail(Number(productId), 'board-detail'),
      queryFn: () => productService.getBoardDetail(productId)
    }),
    queryClient.fetchQuery({
      queryKey: productQueryKey.detail(Number(productId), 'store-info'),
      queryFn: () => productService.getStoreInfo(productId)
    }),
    queryClient.prefetchQuery({
      queryKey: productQueryKey.detail(Number(productId), 'product-option'),
      queryFn: () => productService.getProductOption(productId)
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
