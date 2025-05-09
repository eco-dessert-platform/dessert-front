import { ReactNode } from 'react';
import DefaultLayout from '@/shared/components/DefaultLayout';
import { reviewDetailQueryOptions } from '@/domains/review/queries/useReviewDetailQuery';
import { dehydrate, HydrationBoundary, QueryClient } from '@tanstack/react-query';
import ReviewUpdateFormProvider from './_blocks/ReviewUpdateFormProvider';
import ButtonSection from './_blocks/ButtonSection';

interface Props {
  params: { productId: string; reviewId: string };
  children: ReactNode;
}

const Layout = async ({ params, children }: Props) => {
  if (!params.productId || !params.reviewId) throw new Error('비정상적인 접근');

  const { queryFn, queryKey } = reviewDetailQueryOptions(Number(params.reviewId));
  const queryClient = new QueryClient();
  await queryClient.prefetchQuery({
    queryKey,
    queryFn
  });

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <ReviewUpdateFormProvider>
        <DefaultLayout main={children} footer={<ButtonSection />} />
      </ReviewUpdateFormProvider>
    </HydrationBoundary>
  );
};

export default Layout;
