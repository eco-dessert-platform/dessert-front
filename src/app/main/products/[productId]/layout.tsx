import { ReactNode } from 'react';
import productService from '@/domains/product/queries/service';
import Header from '@/shared/components/Header';
import DefaultLayout from '@/shared/components/DefaultLayout';
import { productQueryKey } from '@/shared/queries/queryKey';
import { dehydrate, HydrationBoundary, QueryClient } from '@tanstack/react-query';
import { GenerateMetadataProps } from '@/shared/types/generateMetadata';
import { getDynamicMetadata } from '@/shared/utils/metadata';

import ProductDetailTabs from './_blocks/ProductDetailTabs';
import FixedPurchaseButtonSection from './info/_blocks/FixedPurchaseButtonSection';

export const generateMetadata = async (props: GenerateMetadataProps) =>
  getDynamicMetadata('product-detail', props);

interface DetailInfoLayoutProps {
  params: Promise<{ productId: string }>; // Promise 타입으로 변경
  children: ReactNode;
}

const ProductDetailLayout = async ({ params, children }: DetailInfoLayoutProps) => {
  const resolvedParams = await params;

  if (!resolvedParams?.productId) return null;

  const id = Number(resolvedParams.productId);

  const queryClient = new QueryClient();

  const { board: boardData, store: storeData } = await queryClient.fetchQuery({
    queryKey: productQueryKey.detail(id, 'product-info'),
    queryFn: () => productService.getProductInfo(id)
  });

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <DefaultLayout
        header={
          <>
            <Header
              title={`[${storeData.storeTitle}] ${boardData.boardTitle}`}
              back
              className="sticky top-0 z-50 bg-white"
            />
            <ProductDetailTabs />
          </>
        }
        main={children}
        footer={<FixedPurchaseButtonSection />}
      />
    </HydrationBoundary>
  );
};

export default ProductDetailLayout;
