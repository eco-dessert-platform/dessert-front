'use client';

import useGetBoardDetailQuery from '@/domains/product/queries/useGetBoardDetailQuery';
import DeliveryFeeSection from './DeliveryFeeSection';
import DetailStoreInfo from './DetailStoreInfo';
import SimpleProductInfo from './SimpleProductInfo';

interface Props {
  productId: string;
}

const SimpleInfoWithStoreSection = ({ productId }: Props) => {
  const { data: boardData } = useGetBoardDetailQuery(productId);

  if (!boardData) return 'not found data';

  return (
    <>
      <DetailStoreInfo storeId={boardData.storeId} />
      <SimpleProductInfo boardData={boardData} />
      <DeliveryFeeSection boardData={boardData} />
    </>
  );
};
export default SimpleInfoWithStoreSection;
