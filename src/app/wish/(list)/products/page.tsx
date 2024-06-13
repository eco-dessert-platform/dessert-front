import WishFolderEditButtonSection from '@/blocks/wish/(list)/products/WishFolderEditButtonSection';
import WishFolderGrid from '@/blocks/wish/(list)/products/WishFolderGrid';
import PaddingWrapper from '@/shared/components/PaddingWrapper';

const WishProductsPage = () => (
  <PaddingWrapper>
    <WishFolderEditButtonSection />
    <WishFolderGrid />
  </PaddingWrapper>
);

export default WishProductsPage;
