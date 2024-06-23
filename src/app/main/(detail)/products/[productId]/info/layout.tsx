import React, { ReactNode } from 'react';

import FixedPurchaseButtonSection from '@/blocks/main/(detail)/products/[productId]/info/FixedPurchaseButtonSection';
import productService from '@/domains/product/queries/service';
import Header from '@/shared/components/Header';
import { ShareIcon } from '@/shared/components/icons';

interface DetailInfoLayoutProps {
  params: { productId: string };
  children: ReactNode;
}

const DetailInfoLayout = async ({ params, children }: DetailInfoLayoutProps) => {
  const [storeData, boardData] = await Promise.all([
    productService.getStoreInfo(params.productId),
    productService.getBoardDetail(params.productId)
  ]);

  return (
    <>
      <Header
        title={`[${storeData.title}] ${boardData.title}`}
        content={
          <button type="button" aria-label="공유 버튼">
            <ShareIcon />
          </button>
        }
        back
        className="sticky top-0 bg-white z-50"
      />
      {children}
      <FixedPurchaseButtonSection boardData={boardData} />
    </>
  );
};

export default DetailInfoLayout;
