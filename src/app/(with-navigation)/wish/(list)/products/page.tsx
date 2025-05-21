import { QueryClient, dehydrate } from '@tanstack/react-query';
import { wishQueryKey } from '@/domains/wish/queries/queryKey';
import wishService from '@/domains/wish/queries/service';
import WishProductsClient from '@/blocks/wish/(list)/products/WishProductsClient';

const WishProductsPage = async () => {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery({
    queryKey: wishQueryKey.folders(),
    queryFn: () => wishService.getWishFolderList(),
  });

  const dehydratedState = dehydrate(queryClient);

  return <WishProductsClient dehydratedState={dehydratedState} />;
};

export default WishProductsPage;
