import * as API from '@/api';

import { WishStoreData, WishStoreListReturn } from '../../types';
import { AxiosResponse } from 'axios';

export const deleteWishStore = async (
  data: WishStoreData
): Promise<AxiosResponse<WishStoreListReturn>> => {
  return API.patch<WishStoreListReturn, null>(`/likes/store/${data.storeId}`, null);
};
