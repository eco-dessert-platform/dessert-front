import { WishFolderType } from '@/domains/wish/types/wishFolder';
import { ListResponse } from '@/shared/types/response';
import fetchExtend from '@/shared/utils/api';
import { throwApiError } from '@/shared/utils/error';

const getWishFolderList = async () => {
  const res = await fetchExtend.get('/wishLists');
  const { list, success, code, message }: ListResponse<WishFolderType[]> = await res.json();
  if (!res.ok || !success) throwApiError({ code, message });
  return list;
};

export default getWishFolderList;
