'use client';

import useGetBoardDetailQuery from '@/domains/product/queries/useGetBoardDetailQuery';
import useGetReviewRatingQuery from '@/domains/review/queries/useGetReviewRatingQuery';
import DeliveryFeeSection from './DeliveryFeeSection';
// import DetailStoreInfo from './DetailStoreInfo';
import SimpleProductInfo from './SimpleProductInfo';
import DetailStoreInfo from './DetailStoreInfo';

interface Props {
  productId: number;
}

const SimpleInfoWithStoreSection = ({ productId }: Props) => {
  const { data } = useGetBoardDetailQuery(productId);

  const boardData = data ?? {
    storeId: 0,
    boardId: 0,
    boardTitle: '',
    boardPrice: 0,
    discountRate: 0,
    deliveryFee: 0,
    freeShippingConditions: 0
  };

  const { data: ratingData = { rating: 0, count: 0 } } = useGetReviewRatingQuery(Number(productId));

  return (
    <>
      <DetailStoreInfo storeId={boardData.storeId} />
      <SimpleProductInfo
        title={boardData.boardTitle}
        price={boardData.boardPrice}
        discountRate={boardData.discountRate}
        rating={ratingData.rating}
        count={ratingData.count}
      />
      <DeliveryFeeSection
        deliveryFee={boardData.deliveryFee}
        freeShippingConditions={boardData.freeShippingConditions}
      />
    </>
  );
};
export default SimpleInfoWithStoreSection;
