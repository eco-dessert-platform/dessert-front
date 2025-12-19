import { dehydrate, HydrationBoundary, QueryClient } from '@tanstack/react-query';
import { wishQueryKey } from '@/domains/wish/queries/queryKey';
import wishService from '@/domains/wish/queries/service';
import PaddingWrapper from '@/shared/components/PaddingWrapper';
import WishFolderEditButtonSection from '@/blocks/wish/(list)/products/WishFolderEditButtonSection';
import WishFolderGrid from '@/blocks/wish/(list)/products/WishFolderGrid';

const WishProductsPage = async () => {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery({
    queryKey: wishQueryKey.folders(),
    queryFn: () => wishService.getWishFolderList()
  });

  const dehydratedState = dehydrate(queryClient);

  return (
    <PaddingWrapper>
      <HydrationBoundary state={dehydratedState}>
        <WishFolderEditButtonSection />
        <WishFolderGrid />
      </HydrationBoundary>
    </PaddingWrapper>
  );
};

export default WishProductsPage;
