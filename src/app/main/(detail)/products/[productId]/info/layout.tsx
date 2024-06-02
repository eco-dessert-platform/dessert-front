import { ReactNode } from 'react';

import FixedPurchaseButtonSection from '@/blocks/product/FixedPurchaseButtonSection';
import getBoardDetail from '@/domains/product/queries/getBoardDetail';
import getStoreInfo from '@/domains/product/queries/getStoreInfo';
import Header from '@/shared/components/Header';
import { ShareIcon } from '@/shared/components/icons';

interface DetailInfoLayoutProps {
  // params: { productId: string };
  children: ReactNode;
}

const DetailInfoLayout = async ({ children }: DetailInfoLayoutProps) => {
  // const data = await getProductDetail(productId);
  const storeData = await getStoreInfo();
  const boardData = await getBoardDetail();

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
      />
      {children}
      <FixedPurchaseButtonSection boardData={boardData} />
    </>
  );
};

export default DetailInfoLayout;
