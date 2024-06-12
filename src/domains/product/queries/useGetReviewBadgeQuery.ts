import QUERY_KEY from '@/shared/constants/queryKey';
import { useQuery } from '@tanstack/react-query';

import productService from './service';

const useGetReviewBadgeQuery = (productId: string) => {
  const queryKey = [QUERY_KEY.boardDetail];
  const queryFn = () => productService.getReviewBadge(productId);

  return useQuery({ queryKey, queryFn });
};

export default useGetReviewBadgeQuery;
