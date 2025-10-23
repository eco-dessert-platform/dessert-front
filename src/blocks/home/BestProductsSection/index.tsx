import ProductsList from '@/blocks/home/BestProductsSection/ProductsList';
import TitleSection from '@/blocks/home/BestProductsSection/TitleSection';
import CategoryTab from '@/domains/product/components/CategoryTab';
import { FILTER_FAMILY_ID } from '@/domains/product/constants/filterFamilyID';
import { INIT_FILTER_VALUE } from '@/domains/product/constants/filterValues';
import productService from '@/domains/product/queries/service';
import { INITIAL_CURSOR } from '@/shared/constants/cursor';
import { productQueryKey } from '@/shared/queries/queryKey';

import { dehydrate, HydrationBoundary, QueryClient } from '@tanstack/react-query';

const BestProductsSection = async () => {
  const queryClient = new QueryClient();

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

  // 쿼리 실행 시간 측정을 종료하고 출력

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <TitleSection />
      {/* 임시로 random 데이터 노출 시 카테고리 탭 노출하지 않도록 함 */}
      <CategoryTab filterFamilyId={FILTER_FAMILY_ID.home} />
      <ProductsList />
    </HydrationBoundary>
  );
};

export default BestProductsSection;
