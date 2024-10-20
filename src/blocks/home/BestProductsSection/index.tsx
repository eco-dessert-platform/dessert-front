import ProductsList from '@/blocks/home/BestProductsSection/ProductsList';
import TitleSection from '@/blocks/home/BestProductsSection/TitleSection';
import CategoryTab from '@/domains/product/components/CategoryTab';
import { INIT_FILTER_VALUE } from '@/domains/product/constants/filterValues';
import productService from '@/domains/product/queries/service';
import { getCookie } from '@/shared/actions/cookie';
import { INITIAL_CURSOR } from '@/shared/constants/cursor';
import { TOKEN } from '@/shared/constants/token';
import { productQueryKey } from '@/shared/queries/queryKey';

import { dehydrate, HydrationBoundary, QueryClient } from '@tanstack/react-query';

const BestProductsSection = async () => {
  const accessToken = await getCookie(TOKEN.accessToken);
  const isLoggedIn = !!accessToken;

  const queryClient = new QueryClient();

  if (isLoggedIn) {
    // 로그인 시에 random 데이터 노출
    await queryClient.prefetchInfiniteQuery({
      queryKey: [...productQueryKey.lists()],
      queryFn: async ({ pageParam: cursorId }: { pageParam: number }) => {
        const result = await productService.getProductsRandom({
          cursorId
        });
        return result;
      },
      initialPageParam: INITIAL_CURSOR
    });
  } else {
    await queryClient.prefetchInfiniteQuery({
      queryKey: [...productQueryKey.lists(), { filter: INIT_FILTER_VALUE }],
      queryFn: async ({ pageParam: cursorId }: { pageParam: number }) => {
        const result = await productService.getAllCategoryProducts({
          cursorId,
          filterValue: INIT_FILTER_VALUE
        });
        return result;
      },
      initialPageParam: INITIAL_CURSOR
    });
  }

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <TitleSection />
      {/* 임시로 random 데이터 노출 시 카테고리 탭 노출하지 않도록 함 */}
      {isLoggedIn || <CategoryTab filterFamilyId="home" />}
      <ProductsList isLoggedIn={isLoggedIn} />
    </HydrationBoundary>
  );
};

export default BestProductsSection;
