import GrayDivider from '@/shared/components/GrayDivider';
import StoreInfoSection from '@/blocks/store/StoreInfoSection';
import StoreBestProductsSection from '@/blocks/store/StoreBestProductsSection';
import StoreAllProductsSection from '@/blocks/store/StoreAllProductsSection';

interface Props {
  params: { id: string };
}

const MainStoreDetailPage = ({ params: { id } }: Props) => {
  const storeId = Number(id);

  return (
    <>
      <StoreInfoSection storeId={storeId} />
      <GrayDivider color="gray100" className="h-[4px]" />
      <StoreBestProductsSection storeId={storeId} />
      <GrayDivider color="gray100" />
      <StoreAllProductsSection storeId={storeId} />
    </>
  );
};

export default MainStoreDetailPage;
