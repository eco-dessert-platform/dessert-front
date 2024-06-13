import WishFolderEditButtonSection from '@/blocks/wish/(list)/products/WishFolderEditButtonSection';
import WishFolderGrid from '@/blocks/wish/(list)/products/WishFolderGrid';
import { wishQueryKey } from '@/domains/wish/queries/queryKey';
import wishService from '@/domains/wish/queries/service';
import PaddingWrapper from '@/shared/components/PaddingWrapper';
import { HydrationBoundary, QueryClient, dehydrate } from '@tanstack/react-query';

const WishProductsPage = async () => {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery({
    queryKey: wishQueryKey.folders(),
    queryFn: () => wishService.getWishFolderList()
  });

  return (
    <PaddingWrapper>
      <HydrationBoundary state={dehydrate(queryClient)}>
        <WishFolderEditButtonSection />
        <WishFolderGrid />
      </HydrationBoundary>
    </PaddingWrapper>
  );
};

export default WishProductsPage;
