import QUERY_KEY from '@/shared/constants/queryKey';
import { useQuery } from '@tanstack/react-query';
import getWishFolderList from './getWishFolderList';

const useWishFolderListQueryQuery = () => {
  const queryKey = [QUERY_KEY.wishFolder];

  return useQuery({ queryKey, queryFn: getWishFolderList });
};

export default useWishFolderListQueryQuery;
