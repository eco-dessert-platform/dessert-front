'use client';

import useGetBoardDetailQuery from '@/domains/product/queries/useGetBoardDetailQuery';
import useGetReivewRatingQuery from '@/domains/review/queries/useGetReviewRatingQuery';
import DeliveryFeeSection from './DeliveryFeeSection';
import DetailStoreInfo from './DetailStoreInfo';
import SimpleProductInfo from './SimpleProductInfo';

interface Props {
  productId: number;
}

const SimpleInfoWithStoreSection = ({ productId }: Props) => {
  const {
    data: boardData = {
      storeId: 0,
      title: '',
      price: 0,
      discountRate: 0,
      deliveryFee: 0,
      freeShippingConditions: 0
    }
  } = useGetBoardDetailQuery(productId);

  const { data: ratingData = { rating: 0, count: 0 } } = useGetReivewRatingQuery(Number(productId));

  return (
    <>
      <DetailStoreInfo storeId={boardData.storeId} />
      <SimpleProductInfo
        title={boardData.title}
        price={boardData.price}
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
