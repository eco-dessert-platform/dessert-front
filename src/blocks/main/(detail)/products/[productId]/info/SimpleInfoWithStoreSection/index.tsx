import productService from '@/domains/product/queries/service';

import DeliveryFeeSection from './DeliveryFeeSection';
import DetailStoreInfo from './DetailStoreInfo';
import SimpleProductInfo from './SimpleProductInfo';

interface Props {
  productId: string;
}

const SimpleInfoWithStoreSection = async ({ productId }: Props) => {
  const [storeData, boardData] = await Promise.all([
    productService.getStoreInfo(productId),
    productService.getBoardDetail(productId)
  ]);
  return (
    <>
      <DetailStoreInfo storeData={storeData} />
      <SimpleProductInfo boardData={boardData} />
      <DeliveryFeeSection boardData={boardData} />
    </>
  );
};
export default SimpleInfoWithStoreSection;
