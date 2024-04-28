import { WishFolderType } from '@/domains/wish/types/wishFolder';
import { ListResponse } from '@/shared/types/response';
import fetchExtend from '@/shared/utils/api';
import { throwApiError } from '@/shared/utils/error';

const getWishFolderList = async () => {
  const res = await fetchExtend.get('/wishLists');
  if (!res.ok) throw new Error('위시 리스트 조회 오류');

  const { list, success, code, message }: ListResponse<WishFolderType[]> = await res.json();
  if (!success) throwApiError({ code, message });

  return list;
};

export default getWishFolderList;
