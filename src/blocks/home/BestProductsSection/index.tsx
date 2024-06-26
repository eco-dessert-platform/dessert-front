import { HydrationBoundary, QueryClient, dehydrate } from '@tanstack/react-query';
import { productQueryKey } from '@/shared/queries/queryKey';
import { INITIAL_CURSOR } from '@/shared/constants/cursor';
import { getCookie } from '@/shared/actions/cookie';
import { TOKEN } from '@/shared/constants/token';
import userService from '@/domains/user/queries/service';
import { preferenceQueryKey } from '@/domains/user/queries/queryKey';
import productService from '@/domains/product/queries/service';
import { INIT_FILTER_VALUE } from '@/domains/product/constants/filterValues';
import TitleSection from '@/blocks/home/BestProductsSection/TitleSection';
import CategoryTab from '@/domains/product/components/CategoryTab';
import ProductsList from '@/blocks/home/BestProductsSection/ProductsList';

const BestProductsSection = async () => {
  const accessToken = await getCookie(TOKEN.accessToken);
  const isLoggedIn = !!accessToken;

  const queryClient = new QueryClient();
  Promise.all([
    await queryClient.prefetchQuery({
      queryKey: preferenceQueryKey.all,
      queryFn: userService.getPreference
    }),
    await queryClient.prefetchInfiniteQuery({
      queryKey: [
        ...productQueryKey.list('home'),
        { filter: INIT_FILTER_VALUE, recommended: isLoggedIn }
      ],
      queryFn: async ({ pageParam: cursorId }: { pageParam: number }) => {
        const result = await productService.getAllProducts({
          cursorId,
          filterValue: INIT_FILTER_VALUE
        });
        return result;
      },
      initialPageParam: INITIAL_CURSOR
    })
  ]);

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <TitleSection />
      <CategoryTab filterFamilyId="home" />
      <ProductsList />
    </HydrationBoundary>
  );
};

export default BestProductsSection;
