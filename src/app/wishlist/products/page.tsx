import WishFolderEditButtonSection from '@/blocks/wish/WishFolderEditButtonSection';
import WishFolderGrid from '@/blocks/wish/WishFolderGrid';
import PaddingWrapper from '@/components/commons/PaddingWrapper';

const WishProductsPage = () => {
  return (
    <PaddingWrapper>
      <WishFolderEditButtonSection />
      <WishFolderGrid />
    </PaddingWrapper>
  );
};

export default WishProductsPage;
