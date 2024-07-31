'use client';

import useGetBoardDetailQuery from '@/domains/product/queries/useGetBoardDetailQuery';
import useGetStoreInfoQuery from '@/domains/product/queries/useGetStoreInfoQuery';
import DeliveryFeeSection from './DeliveryFeeSection';
import DetailStoreInfo from './DetailStoreInfo';
import SimpleProductInfo from './SimpleProductInfo';

interface Props {
  productId: string;
}

const SimpleInfoWithStoreSection = ({ productId }: Props) => {
  const { data: boardData } = useGetBoardDetailQuery(productId);
  const { data: storeData } = useGetStoreInfoQuery({ productId });

  if (!boardData || !storeData) return 'not found data';

  return (
    <>
      <DetailStoreInfo storeData={storeData} />
      <SimpleProductInfo boardData={boardData} />
      <DeliveryFeeSection boardData={boardData} />
    </>
  );
};
export default SimpleInfoWithStoreSection;
