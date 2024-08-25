import { useQuery } from '@tanstack/react-query';
import { productQueryKey } from '@/shared/queries/queryKey';
import productService from './service';

const useGetReviewBadgeQuery = (productId: string) => {
  const queryKey = productQueryKey.detail(Number(productId), 'review-badge');
  const queryFn = () => productService.getReviewBadge(productId);

  return useQuery({ queryKey, queryFn });
};

export default useGetReviewBadgeQuery;
