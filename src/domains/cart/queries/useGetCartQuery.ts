import { useQuery } from '@tanstack/react-query';
import { cartQueryKey } from './queryKey';
import cartService from './service';

const useGetCartQuery = () =>
  useQuery({
    queryKey: cartQueryKey.lists(),
    queryFn: () => cartService.getCart()
  });

export default useGetCartQuery;
