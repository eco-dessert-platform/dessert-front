'use client';

import useGetBoardDetailQuery from '@/domains/product/queries/useGetBoardDetailQuery';
import { useGetReivewRatingQuery } from '@/domains/review/queries/useGetReviewRatingQuery';
import DeliveryFeeSection from './DeliveryFeeSection';
import DetailStoreInfo from './DetailStoreInfo';
import SimpleProductInfo from './SimpleProductInfo';

interface Props {
  productId: number;
}

const SimpleInfoWithStoreSection = ({ productId }: Props) => {
  const { data: boardData } = useGetBoardDetailQuery(productId);
  const { data: ratingData } = useGetReivewRatingQuery(Number(productId));
  if (!boardData) return 'not found data';
  if (!ratingData) return '1';

  return (
    <>
      <DetailStoreInfo storeId={boardData.storeId} />
      <SimpleProductInfo boardData={boardData} ratingData={ratingData} />
      <DeliveryFeeSection boardData={boardData} />
    </>
  );
};
export default SimpleInfoWithStoreSection;
