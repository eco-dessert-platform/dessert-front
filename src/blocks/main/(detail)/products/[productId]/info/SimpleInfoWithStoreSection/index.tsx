import getBoardDetail from '@/domains/product/queries/getBoardDetail';
import getStoreInfo from '@/domains/product/queries/getStoreInfo';
import PaddingWrapper from '@/shared/components/PaddingWrapper';

import DeliveryFeeSection from './DeliveryFeeSection';
import DetailStoreInfo from './DetailStoreInfo';
import SimpleProductInfo from './SimpleProductInfo';

const SimpleInfoWithStoreSection = async () => {
  const [storeData, boardData] = await Promise.all([getStoreInfo(), getBoardDetail()]);
  return (
    <PaddingWrapper>
      <DetailStoreInfo storeData={storeData} />
      <SimpleProductInfo boardData={boardData} />
      <DeliveryFeeSection boardData={boardData} />
    </PaddingWrapper>
  );
};
export default SimpleInfoWithStoreSection;
