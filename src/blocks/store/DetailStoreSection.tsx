import GrayDivider from '@/shared/components/GrayDivider';
import DetailStoreInfo from '@/domains/store/components/DetailStoreInfo';

interface DetailStoreSectionProps {
  store: {
    storeName: string;
    storeId: number;
    profile: string;
    isWished: boolean;
  };
}

const DetailStoreSection = ({ store }: DetailStoreSectionProps) => (
  <>
    <DetailStoreInfo store={store} />
    <GrayDivider />
  </>
);
export default DetailStoreSection;
