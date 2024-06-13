import { useQuery } from '@tanstack/react-query';
import wishService from './service';
import { wishQueryKey } from './queryKey';

const useWishFolderListQuery = () =>
  useQuery({
    queryKey: wishQueryKey.folders(),
    queryFn: async () => {
      const folderList = await wishService.getWishFolderList();
      return folderList;
    }
  });

export default useWishFolderListQuery;
