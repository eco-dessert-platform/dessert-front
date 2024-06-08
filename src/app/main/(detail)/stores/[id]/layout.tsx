import Header from '@/shared/components/Header';
import GrayDivider from '@/shared/components/GrayDivider';

interface Props {
  storeInfo: React.ReactNode;
  storeBestProducts: React.ReactNode;
  storeAllProducts: React.ReactNode;
}

const MainDetailLayout = ({ storeInfo, storeBestProducts, storeAllProducts }: Props) => (
  <>
    <Header title="스토어" back />
    {storeInfo}
    <GrayDivider color="gray100" className="h-[4px]" />
    {storeBestProducts}
    <GrayDivider color="gray100" />
    {storeAllProducts}
  </>
);

export default MainDetailLayout;
