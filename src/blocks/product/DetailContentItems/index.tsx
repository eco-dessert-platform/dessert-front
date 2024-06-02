import getProductDetail from '@/domains/product/queries/getProductDetail';
import { IBoardType } from '@/domains/product/types/productDetailType';

import DeliveryFeeSection from './DeliveryFeeSection';
import ProductOptionsSetion from './ProductOptionsSection';
import ReviewBadgeSection from './ReviewBadgeSection';

interface Props {
  // productId: string;
  boardData: IBoardType;
}

const DetailContentItems = async ({ boardData }: Props) => {
  const data = await getProductDetail();
  const { products } = data;
  return (
    <>
      <DeliveryFeeSection boardData={boardData} />
      <ReviewBadgeSection />
      <ProductOptionsSetion data={products} />
      {/* <DetailInformationImgs data={products} /> */}
    </>
  );
};
export default DetailContentItems;
