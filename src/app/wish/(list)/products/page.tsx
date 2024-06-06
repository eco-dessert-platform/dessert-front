import WishFolderEditButtonSection from '@/blocks/wish/(list)/products/WishFolderEditButtonSection';
import WishFolderGrid from '@/blocks/wish/(list)/products/WishFolderGrid';
import { wishQueryKey } from '@/domains/wish/queries/queryKey';
import wishService from '@/domains/wish/queries/service';
import PaddingWrapper from '@/shared/components/PaddingWrapper';
import { QueryClient } from '@tanstack/react-query';

const WishProductsPage = async () => {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery({
    queryKey: wishQueryKey.folders(),
    queryFn: () => wishService.getWishFolderList()
  });

  return (
    <PaddingWrapper>
      <WishFolderEditButtonSection />
      <WishFolderGrid />
    </PaddingWrapper>
  );
};

export default WishProductsPage;
