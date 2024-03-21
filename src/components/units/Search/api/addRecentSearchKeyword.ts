import API from '@/api';

export const addRecentSearchKeyword = async (keyword: string) => {
  const data = await API.post(`/search?keyword=${keyword}`);
  return data;
};
